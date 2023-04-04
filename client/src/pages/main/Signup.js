import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   default value for date
  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd

  const handleSignupForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="logo.png"
            alt="Logo"
            loading="lazy"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Already registered?
            <Link
              to="/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 rounded-lg sm:px-10">
            <form
              className="mb-0 space-y-6"
              onSubmit={handleSubmit(handleSignupForm)}
            >
              {/* full name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.name ? (
                    <span className="text-red-500 font-medium">
                      Name field is required!
                    </span>
                  ) : (
                    "Name"
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your full name"
                    {...register("name", { required: true, maxLength: 100 })}
                    className="w-full form-input rounded-md"
                  />
                </div>
              </div>

              {/* email address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.email ? (
                    <span className="text-red-500 font-medium">
                      Email field is required!
                    </span>
                  ) : (
                    "Email"
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Enter your email address"
                    {...register("email", { required: true })}
                    className="w-full form-input rounded-md"
                  />
                </div>
              </div>

              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.password ? (
                    <span className="text-red-500 font-medium">
                      Password contain at least 8 characters, 1 uppercase, 1
                      lowercase, 1 number and 1 special character{" "}
                      <span className="text-purple-500">!#$%&?@</span>
                    </span>
                  ) : (
                    "Password"
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?@]{8,20}$/,
                      minLength: 8,
                      maxLength: 20,
                    })}
                    className="w-full form-input rounded-md"
                  />
                </div>
              </div>

              {/* confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.confirmPassword ? (
                    <span className="text-red-500 font-medium">
                      Confirm Password field is required!
                    </span>
                  ) : (
                    "Confirm Password"
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="off"
                    placeholder="Enter the password again"
                    {...register("confirmPassword", { required: true })}
                    className={`w-full form-input rounded-md ${
                      watch("password") !== watch("confirmPassword") &&
                      "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    }`}
                  />
                </div>
              </div>

              {/* user avatar */}
              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.avatar ? (
                    <span className="text-red-500 font-medium">
                      Avatar field is required!
                    </span>
                  ) : (
                    "Avatar"
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    {...register("avatar", { required: true })}
                    className="w-full form-input rounded-md"
                  />
                </div>
              </div>

              {/* date of birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.dob ? (
                    <span className="text-red-500 font-medium">
                      DOB field is required!
                    </span>
                  ) : (
                    "Date of Birth"
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="off"
                    defaultValue={defaultValue}
                    {...register("dob", { required: true, maxLength: 100 })}
                    className="w-full form-input rounded-md"
                  />
                </div>
              </div>

              {/* gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.gender ? (
                    <span className="text-red-500 font-medium">
                      Gender field is required!
                    </span>
                  ) : (
                    "Gender"
                  )}
                </label>
                <div className="mt-1">
                  <select
                    id="gender"
                    name="gender"
                    {...register("gender", { required: true })}
                    className="w-full form-select rounded-md"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="binary">Binary</option>
                  </select>
                </div>
              </div>

              {/* phone number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.phoneNumber ? (
                    <span className="text-red-500 font-medium">
                      Phone Number field is required!
                    </span>
                  ) : (
                    "Phone Number (BD)"
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="off"
                    placeholder="i.e.: +8801xxxxxxxxx"
                    {...register("phoneNumber", { required: true })}
                    className="w-full form-input rounded-md"
                  />
                </div>
              </div>

              {/* form submit button */}
              <div>
                <button type="submit" className="w-full btn-primary">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

/**
 * React.js - How to set a default value for input date type
 * https://stackoverflow.com/questions/49277112/react-js-how-to-set-a-default-value-for-input-date-type
 */
