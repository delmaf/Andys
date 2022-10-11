const mongoose = require("mongoose");

const Partners = mongoose.model(
  "Partners",
  new mongoose.Schema({
    alt: String,
    imgUrl: String,
    redirectUrl: String,
  })
);

module.exports = Partners;
