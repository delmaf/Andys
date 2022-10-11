const mongoose = require("mongoose");
// const { Schema } = mongoose;

const footerSubmenu = mongoose.model(
  "footerSubmenu",
  new mongoose.Schema({
    category: String,
    name: String,
  })
);

module.exports = footerSubmenu;
