const mongoose = require("mongoose");
const db = require("./app/models");
const Location = db.location;
const Partners = db.partners;
const navSubmenu = db.navSubmenu;
const headerNavBar = db.headerNavBar;
const contentCategory = db.contentCategory;
const products = db.products;
const footerCategory = db.footerCategory;
const footerSubmenu = db.footerSubmenu;
const Role = db.role;

const {
  prodList,
  prodCategories,
  footerItems,
  footerCategories,
  headerNav,
  navSubm,
  contact,
  partnersData,
} = require("./app/colectionData");

const createRolesTable = async () => {
  Role.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Role.create([
        {
          name: "user",
        },
        {
          name: "moderator",
        },
        {
          name: "admin",
        },
      ]);
    }
  });
};

const createLocationsTable = async () => {
  Location.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Location.create(contact);
    }
  });
};

const createPartnersTable = async () => {
  Partners.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Partners.create(partnersData);
    }
  });
};

const navSubmenuTable = async () => {
  navSubmenu.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await navSubmenu.create(navSubm);
      await db.headerNavBar
        .find({}, async (err, navItems) => {
          navItems.forEach(async (nav) => {
            if (nav.subMenu.length === 0) {
              console.log(nav);
              await db.headerNavBar.findByIdAndUpdate(
                nav._id,
                {
                  $push: {
                    subMenu: await db.navSubmenu.find({ type: nav.title }),
                  },
                },
                { new: true }
              );
            }
          });
        })
        .clone();
    }
  });
};

const headerNavBarTable = async () => {
  headerNavBar.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await headerNavBar.create(headerNav);
    }
  });
};

//--------------------------------------------products---------------------------------------------------
const contentCategoryTable = async () => {
  contentCategory.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await contentCategory.create(prodCategories);
    }
  });
};

const productsTable = async () => {
  products.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await products.create(prodList);
      await contentCategory
        .find({}, async (err, cat) => {
          cat.forEach(async (prod) => {
            console.log(prod, "prod");
            if (prod.items.length === 0) {
              await db.contentCategory.findByIdAndUpdate(
                prod._id,
                {
                  $push: {
                    items: await db.products.find({
                      category: prod.title,
                    }),
                  },
                },
                { new: true }
              );
            }
          });
        })
        .clone();
    }
  });
};

//--------------------------------------------------------------------footer------------------------------------------------------------------
const footerCategoryTable = async () => {
  footerCategory.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await footerCategory.create(footerCategories);
    }
  });
};

const footerSubmenuTable = async () => {
  footerSubmenu.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await footerSubmenu.create(footerItems);
      await db.footerCategory
        .find({}, async (err, footerItems) => {
          footerItems.forEach(async (fItems) => {
            if (fItems.list.length === 0) {
              await db.footerCategory.findByIdAndUpdate(
                fItems._id,
                {
                  $push: {
                    list: await db.footerSubmenu.find({
                      category: fItems.title,
                    }),
                  },
                },
                { new: true }
              );
            }
          });
        })
        .clone()
        .catch(function (err) {
          console.log(err);
        });
    }
  });
};

module.exports = {
  createLocationsTable,
  createPartnersTable,
  headerNavBarTable,
  navSubmenuTable,
  contentCategoryTable,
  productsTable,
  footerCategoryTable,
  footerSubmenuTable,
  createRolesTable,
};
