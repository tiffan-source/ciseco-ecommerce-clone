/**
 * Title: User route
 * Description: Routing credentials based on user
 * Author: Hasibul Islam
 * Date: 11/03/2023
 */

/* external import */
const express = require("express");

/* internal imports */
const userController = require("../controllers/user.controller");
const photoController = require("../controllers/photo.controller");

/* middleware imports */
const upload = require("../middlewares/upload.middleware");
const verify = require("../middlewares/verify.middleware");
const authorize = require("../middlewares/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload & update user avatar
router
  .route("/avatar")
  .post(upload.single("avatar"), photoController.uploadPhoto)
  .patch(
    upload.single("avatar"),
    verify,
    authorize("admin", "buyer", "seller", "supplier", "deliverer"),
    photoController.updatePhoto
  );

// sign up an user
router.post("/sign-up", userController.signUp);

// sign in an user
router.post("/sign-in", userController.signIn);

// forgot password of an user account
router.patch("/forgot-password", userController.forgotPassword);

// login persistency
router.get("/me", verify, userController.persistLogin);

/* router methods CRUD integration */
// display all users
router.get("/all", verify, authorize("admin"), userController.displayUsers);

// display, update and remove specific user
router
  .route("/:id")
  .get(
    verify,
    authorize("admin", "buyer", "seller", "supplier", "deliverer"),
    userController.displayUser
  )
  .patch(
    verify,
    authorize("admin", "buyer", "seller", "supplier", "deliverer"),
    userController.updateUser
  )
  .delete(
    verify,
    authorize("admin", "buyer", "seller", "supplier", "deliverer"),
    userController.removeUser
  );

/* export user router */
module.exports = router;
