// Third party importing
const HttpError = require("../../models/http-error");
const { validationResult } = require("express-validator");

// Manul file importing
const UserModel = require("../../models/User/UserModel");

// Below is the function to handle user sign-up
const userSignUp = async (req, res, next) => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    console.log(validationError);
    return next(new HttpError("Invalid inputs, please check yout data", 422)); // use with async await
    throw new HttpError("Invalid inputs, please check yout data", 422); // use without async await
  }
  const { name, mobileNumber, email, password } = req.body;

  // Getting user exist with email or phone number
  try {
    const existUser = await UserModel.findOne({
      $or: [{ mobileNumber: mobileNumber }, { email: email }],
    });

    if (existUser) {
      return res.status(422).json({
        status: 422,
        message: `User already exist, Sign-in with you secret credential.`,
        data: existUser.toObject({ getters: true }),
      }); // Setting getters to true will give new key in the API response object with name id whose value will be same as _id.
    }
  } catch (error) {
    const catchedError = new HttpError(
      `Failed to check user in our system.`,
      500
    );
    return next(catchedError);
  }

  const createUser = new UserModel({
    name: name,
    mobileNumber: mobileNumber,
    email: email,
    password: password,
  });

  try {
    await createUser.save();
  } catch (error) {
    const newError = new HttpError(`User sign-up failed.`, 500);
    return next(newError);
  }

  console.log(`User sign-up API calls...........`);
  return res.status(200).json({
    status: 200,
    message: `User sign-up successfully`,
    data: createUser,
  });
};

// Method for user Sign-in API:
const userSignIn = async (req, res, next) => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    const newError = new HttpError(
      "Invalid inputs, please check yout data",
      422
    );
    return next(newError);
  }

  const { email, password } = req.body;

  try {
    const existsUser = await UserModel.findOne({
      email: email,
      password: password,
    });

    if (!existsUser) {
      return res
        .status(422)
        .json({ status: 422, message: `Either email or password is invalid.` });
    }

    return res.status(200).json({
      status: 200,
      message: `Welcome ${existsUser.name}`,
      data: existsUser,
    });
  } catch (error) {
    return new HttpError(`User sing-in failed`, 500);
  }
};

// Method to get user basic profile
const getUserProfile = async (req, res, next) => {
  const { userId } = req.params
  console.log(userId);

  if (!userId) {
    return res.status(422).json({ status: 422, message: `Id is required in url` })
  }

  const existUser = await UserModel.findOne({ _id: userId }).select('name mobileNumber email')

  if (!existUser) {
    console.log(`User does not exist for the id: ${userId}`);
    return res.status(422).json({ status: 422, message: `User not found` })
  }

  console.log(`User fetched successfully for id: ${userId}`);
  return res.status(200).json({ status: 200, message: `Profile fetch successfully`, data: existUser })
}

// Method to update the user profile
const updateUserProfile = async (req, res, next) => {

  const { userId } = req.params
  const { name, mobileNumber, email } = req.body
  if (!userId) {
    return res.status(422).json({ status: 422, message: `User id is required` })
  }

  if (!name && !mobileNumber && !email) {
    return res.status(422).json({ status: 422, message: `Please update atleast one field` })
  }

  const existsUser = await UserModel.findOne({ _id: userId }).select('-password')

  if (!existsUser) {
    console.log(`User does not exist for the id: ${userId}`);
    return res.status(422).json({ status: 422, message: `User not found` })
  }

  try {

    existsUser.name = name ? name : existsUser.name
    existsUser.email = email ? email : existsUser.email
    existsUser.mobileNumber = mobileNumber ? mobileNumber : existsUser.mobileNumber
    await existsUser.save();

    console.log(`User profile updated successfully for user id: ${userId} and mobile number: ${existsUser.mobileNumber}`);
    return res.status(200).json({ status: 200, message: `Profile updated successfully`, data: existsUser })
  } catch (error) {
    console.log(error);
    const newError = new HttpError(`Failed to update user profile`, 500);
    return next(newError);
  }
}
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
exports.userSignIn = userSignIn;
exports.homeRoute = homeRoute;
exports.getUserProfile = getUserProfile
exports.updateUserProfile = updateUserProfile
