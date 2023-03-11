/**
 * Title: User service
 * Description: Servicing credentials based on user
 * Author: Hasibul Islam
 * Date: 11/03/2023
 */

/* internal import */
const User = require("../models/user.model");
const token = require("../utils/token.util");

/* find by email */
async function findByEmail(email) {
  return await User.findOne({ email });
}

/* sign up an user */
exports.signUp = async (data) => {
  return await User.create(data);
};

/* sign in an user */
exports.signIn = async ({ email, password }) => {
  const result = await findByEmail(email);

  if (!result) {
    return {
      acknowledgement: false,
      message: "Not Found",
      description: "Entered a wrong email address",
    };
  }

  const isPasswordValid = result.comparePassword(password, result.password);

  if (isPasswordValid === false) {
    return {
      acknowledgement: false,
      message: "Not Acceptable",
      description: "Entered incorrect password",
    };
  }

  if (result.status === "inactive") {
    return {
      acknowledgement: false,
      message: "Unauthorized",
      description: "Account status is inactive",
    };
  }

  const accessToken = token(result);

  return { ...result.toObject(), accessToken };
};

/* forgot account of an user account */
exports.forgotPassword = async ({ email, password }) => {
  const result = await findByEmail(email);

  if (!result) {
    return {
      acknowledgement: false,
      message: "Not Found",
      description: "Entered a wrong email address",
    };
  }

  const hashedPassword = result.encryptedPassword(password);
  await User.findOneAndUpdate(
    { email },
    { $set: { password: hashedPassword } },
    { runValidators: true }
  );

  return result;
};

// login persistency
exports.persistLogin = async ({ _id }) => {
  const user = await User.findById(_id);
  return user;
};

// display all users
exports.displayUsers = async ({ page, limit }) => {
  const result = await User.find({})
    .skip((Number(page) - 1) * limit)
    .limit(limit)
    .sort("-updatedAt");

  const count = await User.estimatedDocumentCount();
  return { users: result, count };
};

// display specific user
exports.displayUser = async ({ id }) => {
  return await User.findById(id);
};

/**
 * update specific user credentials
 * permanently disable user credentials
 */
exports.updateUser = async (id, data) => {
  // { status: "inactive" } passing instead of data
  return await User.findByIdAndUpdate(id, data, {
    runValidators: true,
    returnOriginal: false,
  });

  /* permanently disable user credentials */
  //   return await User.findByIdAndUpdate(
  //     id,
  //     { status: "inactive" },
  //     {
  //       runValidators: true,
  //       returnOriginal: false,
  //     }
  //   );
};

// remove specific user
exports.removeUser = async (id) => {
  /* remove user credentials permanently */
  return await User.findByIdAndDelete(id);
};