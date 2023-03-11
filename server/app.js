/**
 * Title: Initial segment of this project
 * Description: All application level tasks execute here
 * Author: Hasibul Islam
 * Date: 10/03/2023
 */

/* external imports */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

/* internal import */
const error = require("./middlewares/error.middleware");

/* router level imports */
const userRoute = require("./routes/user.route");

/* application level connection */
const app = express();

/* middleware connections */
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

/* router level connections */
app.use("/api/user", userRoute);

/* global error handler */
app.use(error);

/* connection establishment */
app.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "The request is OK and fetch successful request",
      data: "Ciseco E-Commerce server connection establish successfully",
    });
  } catch (err) {
    next(err);
  } finally {
    console.log(`URL: ${req.url} || Method: ${req.method}`);
  }
});

/* export application */
module.exports = app;
