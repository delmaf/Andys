const db = require("../models");
const partners1 = db.partners;

exports.partners = async (req, res) => {
  await partners1
    .find({})
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
