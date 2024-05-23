// Third party importing
const HttpError = require("../../models/http-error");

// Below is the function to handle user sign-up
const userSignUp = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const message = !email ? "Email is required" : "Password is required";

    console.log(message);
    return res.status(422).json({ message: message, status: 422 });
  }

  console.log(`User sign-up API calls...........`);
  return res
    .status(200)
    .json({ message: `User sign-up successfully`, status: 200 });
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