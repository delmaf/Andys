const mongoose = require("mongoose");

const navSubmenu = mongoose.model(
  "navSubmenu",
  new mongoose.Schema({
    type: String,
    title: String,
  })
);

module.exports = navSubmenu;
