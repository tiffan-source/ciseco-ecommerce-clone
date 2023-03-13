/**
 * Title: Subcategory controller
 * Description: Controlling credentials based on subcategory
 * Author: Hasibul Islam
 * Date: 13/03/2023
 */

/* internal import */
const subcategoryService = require("../services/subcategory.service");

/* insert new category */
exports.createSubcategory = async (req, res, next) => {
  try {
    const result = await subcategoryService.createSubcategory(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully created new category credentials",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all category */
exports.displaySubcategories = async (req, res, next) => {
  try {
    const result = await subcategoryService.displaySubcategories(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetch all category's credentials",
      count: result.count,
      data: result.categories,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific category */
exports.displaySubcategory = async (req, res, next) => {
  try {
    const result = await subcategoryService.displaySubcategory(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch specific category credentials",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific category */
exports.updateSubcategory = async (req, res, next) => {
  try {
    const result = await subcategoryService.updateSubcategory(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific category credentials",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific category */
exports.removeSubcategory = async (req, res, next) => {
  try {
    const result = await subcategoryService.removeSubcategory(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specific category credentials",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
