const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footerCategory = mongoose.Schema({
  title: String,
  list: [
    {
      type: Schema.Types.ObjectID,
      ref: "footerSubmenu",
    },
  ],
});

module.exports = mongoose.model("footerCategory", footerCategory);
