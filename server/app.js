/**
 * Title: Initial segment of this project
 * Description: All application level tasks execute here
 * Author: Hasibul Islam
 * Date: 10/03/2023
 */

/* external imports */
const express = require("express");
const cors = require("cors");

/* internal imports */

/* router level imports */

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

/* connection establishment */
app.get("/", (req, res) => {
  try {
    console.log(req);

    res.status(204).json({
      acknowledgement: true,
      title: "No Content",
      message:
        "The request has been successfully processed, but is not returning any content",
      description: "Ciseco E-Commerce server connection establish successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      acknowledgement: false,
      title: "Internal Server Error",
      message: error.name,
      description: error.message,
    });
  }
});

/* export application */
module.exports = app;
