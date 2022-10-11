const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const headerNavBar = mongoose.Schema({
  title: String,
  subMenu: [
    {
      type: Schema.Types.ObjectID,
      ref: "navSubmenu",
    },
  ],
});

module.exports = mongoose.model("headerNavBar", headerNavBar);
