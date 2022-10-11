const db = require("../models");
const footerCategory1 = db.footerCategory;

exports.footerCategory = async (req, res) => {
  await footerCategory1
    .find({})
    .populate("list", "-category -__v")
    .exec((err, item) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!item) {
        return res.status(404).send({ message: "item nf" });
      }
      res.status(200).send(item);
    });
};
