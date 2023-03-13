/**
 * Title: Create category schema
 * Description: Schema that consume category based credentials
 * Author: Hasibul Islam
 * Date: 11/03/2023
 */

/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create category schema */
const categorySchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a category name"],
      trim: true,
      unique: [true, "Same category already exists"],
      maxLength: [100, "Category name would be at most 100 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide category description"],
      trim: true,
      maxLength: [500, "Category description would be at most 500 characters"],
    },

    // for thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      },
      public_id: {
        type: String,
        default: "unsplash/photo-1472141521881-95d0e87e2e39",
      },
    },

    // for tags
    tags: {
      type: [{ type: String, trim: true }],
      validate: {
        validator: function (value) {
          return value.length <= 5;
        },
        message: "Won't able to add more than 5 tags",
      },
    },

    // for sub-categories
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
      },
    ],

    // for category  time stamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* middleware for category */
categorySchema.pre("save", function (next) {
  // Capitalize title
  let splitStr = this.title.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  this.title = splitStr.join(" ");

  // replace space with hyphen and lowercase
  const newTags = [];
  this.tags.forEach((tag) => newTags.push(tag.replace(" ", "-").toLowerCase()));
  this.tags = newTags;

  next();
});

/* create category model schema */
const Category = mongoose.model("Category", categorySchema);

/* export category schema */
module.exports = Category;

/**
 * Array limit in mongoose schema validation
 * https://stackoverflow.com/questions/28514790/how-to-set-limit-for-array-size-in-mongoose-schema
 * How can i capitalize strings in mongoose?
 * https://stackoverflow.com/questions/28116533/how-can-i-capitalize-strings-in-mongoose
 */
