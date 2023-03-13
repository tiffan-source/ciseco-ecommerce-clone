/**
 * Title: Product service
 * Description: Servicing credentials based on service
 * Author: Hasibul Islam
 * Date: 13/03/2023
 */

/* internal import */
const Product = require("../models/product.model");
const Subcategory = require("../models/subcategory.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");

// remove gallery
async function galleryRemove(gallery) {
  gallery.forEach(async (gal) => await remove(gal.public_id));
}

// product gallery update
exports.galleryUpdate = async ({ pid }) => {
  const product = await Product.findById(pid);
  if (product.gallery.length) galleryRemove(product.gallery);
};

/* insert new product */
exports.createProduct = async (data) => {
  const result = await Product.create(data);
  await Subcategory.findByIdAndUpdate(result.subcategory, {
    $push: { products: result._id },
  });
  return result;
};

/* display all products */
exports.displayProducts = async ({ page, limit }) => {
  return await Product.find({})
    .skip((Number(page) - 1) * limit)
    .limit(limit)
    .sort("-updatedAt");
};

/* display specific product */
exports.displayProduct = async ({ id }) => {
  return await Product.findById(id);
};

/* update specific product */
exports.updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(
    id,
    { $set: data },
    { returnOriginal: false, runValidators: true }
  );
};

/* remove specific product */
exports.removeProduct = async ({ id }) => {
  const result = await Product.findByIdAndDelete(id);
  if (result.gallery.length) {
    // remove thumbnail
    remove(result.thumbnail.public_id);

    // remove gallery
    galleryRemove(result.gallery);
  }

  // remove from user cart
  const product = await User.find({
    cart: { $elemMatch: { product: result._id } },
  });
  product.forEach(
    async (user) =>
      await User.findByIdAndUpdate(user._id, {
        $pull: { cart: { product: result._id } },
      })
  );

  return result;
};

/**
 * How to search in array of object in MongoDB?
 * https://www.tutorialspoint.com/how-to-search-in-array-of-object-in-mongodb
 */
