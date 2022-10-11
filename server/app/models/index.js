const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.location = require("./location.model");
db.partners = require("./partners.model");
db.navSubmenu = require("./navSubmenu.model");
db.headerNavBar = require("./headerNavBar.model");
db.contentCategory = require("./contentCategory.model");
db.products = require("./products.model");
db.footerSubmenu = require("./footerSubmenu.model");
db.footerCategory = require("./footerCateg.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
