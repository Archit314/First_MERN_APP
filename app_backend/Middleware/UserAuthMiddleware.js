const HttpError = require('../models/http-error')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {


    try {
        const authToken = req.headers.authorization // This will give token as -> Bearer token, so to extract the token we have to split the whole string from white space so that we can seperate Bearer text form token

        let userAuthToken = authToken.split(' ')[1]    // this will remove bearer from the whole string and give the user token
        // Here, [1] is used to access token because at [0] we will get bearer string.

        if (!userAuthToken) {
            return res.status(401).json({ status: 401, message: `Authentication failed` })
        }

        const decodedToken = jwt.verify(userAuthToken, 'token_secret_string_for_authentication')
        req.userAuthInfo = {
            userId: decodedToken.userId,
            email: decodedToken.email,
            mobileNumber: decodedToken.mobileNumber
        }
        next()

    } catch (error) {
        const newError = new HttpError('Authentication failed!', 401)
        return next(newError)
    }

}