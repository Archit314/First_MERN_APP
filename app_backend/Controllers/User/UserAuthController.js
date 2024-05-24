// Third party importing
const HttpError = require("../../models/http-error");
const { validationResult } = require("express-validator");

// Manul file importing
const UserModel = require('../../models/User/UserModel')

// Below is the function to handle user sign-up
const userSignUp = async (req, res, next) => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    console.log(validationError);
    return next(new HttpError("Invalid inputs, please check yout data", 422)) // use with async await
    throw new HttpError("Invalid inputs, please check yout data", 422); // use without async await
  }
  const {name, mobileNumber, email, password } = req.body;

  // Getting user exist with email or phone number
  try{
    const existUser = await UserModel.findOne({
      $or: [{ mobileNumber: mobileNumber }, { email: email }]
    })

    if(existUser){
      return res.status(422).json({status: 422, message: `User already exist, Sign-in with you secret credential.`, data: existUser.toObject({getters: true})}) // Setting getters to true will give new key in the API response object with name id whose value will be same as _id.
    }
  }catch(error){
    const catchedError = new HttpError(`Failed to check user in our system.`, 500)
    return next(catchedError)
  }


  const createUser = new UserModel({
    name: name,
    mobileNumber: mobileNumber,
    email: email,
    password: password
  })
  
  try{
    await createUser.save()
  }catch(error){
    const newError = new HttpError(`User sign-up failed.`, 500)
    return next(newError)
  }

  console.log(`User sign-up API calls...........`);
  return res
    .status(200)
    .json({status: 200, message: `User sign-up successfully`, data: createUser });
};

// Practice route
const homeRoute = (req, res, next) => {
  // If some error occured in any specific route then it will be thrown out to app.js file and from there app.use middle ware will handle the error:
  throw new HttpError(`Could not found`, 404);

  // Use when we do not have error hanling that we have created in http-error.js file and app.use middleware in the app.js file:
  // const error = new Error('Could not found')
  // error.code = 404
  // throw error
};

exports.userSignUp = userSignUp;
exports.homeRoute = homeRoute;
