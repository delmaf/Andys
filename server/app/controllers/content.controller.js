const db = require("../models");
const contentCategory1 = db.contentCategory;

exports.content = async (req, res) => {
  await contentCategory1
    .find({})
    .populate("items", "-category -__v")
    .exec((err, products) => {
      console.log(products);
      res.status(200).json(products);
    });
};

exports.contentCategory = async (req, res) => {
  await contentCategory1
    .find(req.params)
    .populate("items", "-category -__v")
    .exec((err, products) => {
      res.status(200).json(products);
    });
};
