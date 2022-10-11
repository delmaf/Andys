const { type } = require("express/lib/response");
const db = require("../models");
const headerNav = db.headerNavBar;

exports.nav = async (req, res) => {
  headerNav
    .find({}, { type: 0 })
    .populate("subMenu", "-type -__v")
    //   .aggregate([
    //   {
    //     $lookup: {
    //       from: "locations",
    //       localField: "item",
    //       foreignField: "item",
    //       as: "phoneNumbers",
    //     },
    //   },
    // ]);
    .exec((err, nav) => {
      console.warn(JSON.stringify(nav, null, 2));
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!nav) {
        return res.status(404).send({ message: "item nf" });
      }
      res.status(200).send(nav);
    });
};
