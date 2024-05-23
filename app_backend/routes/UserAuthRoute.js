// Third party imports
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

// Manual file imports
// const HttpError = require('../models/http-error')
const UserAuthController = require("../Controllers/User/UserAuthController");

console.log("reached");

router.post(
  "/sign-up",
  [check("email").not().isEmpty(), check("password").not().isEmpty()],
  UserAuthController.userSignUp
);

router.get("/", UserAuthController.homeRoute);

module.exports = router;
