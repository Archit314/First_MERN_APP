// Third party imports
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

// Manual file imports
// const HttpError = require('../models/http-error')
const UserAuthController = require("../Controllers/User/UserAuthController");
const UserAuthMiddleware = require('../Middleware/UserAuthMiddleware')

router.post(
  "/sign-up",
  [
    check("name").not().isEmpty().withMessage('Please enter name'),
    check("mobileNumber").not().isEmpty().withMessage('Please enter mobile number'),
    check("email").not().isEmpty().withMessage('Please enter email'),
    check("password").not().isEmpty().withMessage('Please enter password'),
  ],
  UserAuthController.userSignUp
);
router.post(
  "/sign-in",
  [check("email").not().isEmpty().withMessage('Please enter email'), check("password").not().isEmpty().withMessage('Please enter password')],
  UserAuthController.userSignIn
);

// Middleware to protect the below routes
router.use(UserAuthMiddleware)

router.get('/profile', UserAuthController.getUserProfile)
router.patch('/profile/update', UserAuthController.updateUserProfile)

router.get("/", UserAuthController.homeRoute);

module.exports = router;
