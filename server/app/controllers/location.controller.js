const db = require("../models");
const location1 = db.location;

exports.location = async (req, res) => {
  await location1
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
