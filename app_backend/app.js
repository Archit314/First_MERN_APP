// Third party imports
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// File imports
const userAuthRoute = require("./routes/UserAuthRoute");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");

const app = express();

// This middleware is used for JSON object payload
app.use(bodyParser.json());

// This is to solve the CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// Specific Routes having common starting point
app.use("/v1/api/auth/user", userAuthRoute);

// If user hit the route that does not exist
app.use((req, res, next) => {
  const error = new HttpError("Oops! Could not find this route.", 404);
  throw error;
});

// Error handling: if error occur inside any of the above mentioned routes
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || `An unknown error occured!` });
});

// Connecting the mongodb
mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => {
    // console.log(process.env.MONGODB_CONNECTION_URL);
    console.log(`MongoDb Status: OK`);
    app.listen(process.env.PORT);
    console.log(`Server Status: OK`);
  })
  .catch((error) => {
    console.log(error);
  });
