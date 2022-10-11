const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentCategory = mongoose.Schema({
  title: String,
  items: [
    {
      type: Schema.Types.ObjectID,
      ref: "products",
    },
  ],
});

module.exports = mongoose.model("contentCategory", contentCategory);
