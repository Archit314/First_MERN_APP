// Third party imports
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// File imports
const userAuthRoute = require("./routes/UserAuthRoute");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use("/v1/api/auth/user", userAuthRoute);

app.use((req, res, next) => {
  const error = new HttpError("Oops! Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    console.log("got error");
    return next(error);
  }
  console.log("errors");
  res.status(error.code || 500);
  res.json({ message: error.message || `An unknown error occured!` });
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => {
    // console.log(process.env.MONGODB_CONNECTION_URL);
    console.log(`Application connected to MongoDb successfully`);
    app.listen(process.env.PORT);
  })
  .catch((error) => {
    console.log(error);
  });
