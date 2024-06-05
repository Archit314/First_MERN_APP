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
    check("name").not().isEmpty(),
    check("mobileNumber").not().isEmpty(),
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
  ],
  UserAuthController.userSignUp
);
router.post(
  "/sign-in",
  [check("email").not().isEmpty(), check("password").not().isEmpty()],
  UserAuthController.userSignIn
);

// Middleware to protect the below routes
router.use(UserAuthMiddleware)

router.get('/profile/:userId', UserAuthController.getUserProfile)
router.patch('/profile/update/:userId', UserAuthController.updateUserProfile)

router.get("/", UserAuthController.homeRoute);

module.exports = router;
