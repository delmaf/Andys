const prodList = [
  {
    category: "Pizza",
    name: "Margherita",
    price: 90,
    currency: "mdl",
    urlImg:
      "https://andys.md/public/menu/thumbs/version_220x310x1/756e8908e97a0b115455d61e9974e4be.jpg",
      bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/756e8908e97a0b115455d61e9974e4be.jpg",
    inCart: false,
  },
  {
    category: "Pizza",
    name: "Neapolitana",
    price: 95,
    currency: "mdl",
    urlImg:
      "https://andys.md/public/menu/thumbs/version_220x310x1/e82699285be9e14654e7ca2476437b49.jpg",
      bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/9edc060af068da34bc5c8298755f11a2.jpg",
    inCart: false,
  },
  {
    category: "Pizza",
    name: "Barbeque",
    price: 110,
    currency: "mdl",
    urlImg:
      "https://andys.md/public/menu/thumbs/version_220x310x1/052e9f089f73d9cb5ecb8b831109f3b5.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/6401a48dae0fe70a9d21e2af5a2af15d.jpg",
    inCart: false,
  },
  {
    category: "Pizza",
    name: "Mario",
    price: 85,
    currency: "mdl",
    urlImg:
      "https://andys.md/public/menu/thumbs/version_220x310x1/737c8692719fc56eb65cd525be837aef.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/6401a48dae0fe70a9d21e2af5a2af15d.jpg",
    inCart: false,
  },
  {
    category: "Pizza",
    name: "4 Cheese",
    price: 105,
    currency: "mdl",
    urlImg:
      "https://andys.md/public/menu/thumbs/version_220x310x1/eac9362c7dcd11df9149ecb057259c6d.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/cf7cd100049565ea69af659f168fc20b.jpg",
    inCart: false,
  },
  {
    category: "Breakfast",
    name: "Vegetables Omelette",
    price: 95,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/b64e43af8c454dbd9387ae8d363b880f.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b64e43af8c454dbd9387ae8d363b880f.jpg",
    inCart: false,
  },
  {
    category: "Breakfast",
    name: "Bacon Omelette",
    price: 60,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/93915d1d915bc498ae67a89ef34eb7f6.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b64e43af8c454dbd9387ae8d363b880f.jpg",
    inCart: false,
  },
  {
    category: "Breakfast",
    name: "Bacon & Egg Croissant",
    price: 25,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/93915d1d915bc498ae67a89ef34eb7f6.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b64e43af8c454dbd9387ae8d363b880f.jpg",
    inCart: false,
  },
  {
    category: "Breakfast",
    name: "Сottage Cheese Cakes",
    price: 85,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/93915d1d915bc498ae67a89ef34eb7f6.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b64e43af8c454dbd9387ae8d363b880f.jpg",
    inCart: false,
  },
  {
    category: "Breakfast",
    name: "Cheese Cakes",
    price: 55,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/c1dcb23f8376fc6ead3aeec68b59a2d0.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b64e43af8c454dbd9387ae8d363b880f.jpg",
    inCart: false,
  },
  {
    category: "Salads",
    name: "Salmon salad",
    price: 120,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/b11f6824a28ef9a4bbce819d0c7b1318.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b11f6824a28ef9a4bbce819d0c7b1318.jpg",
    inCart: false,
  },
  {
    category: "Salads",
    name: "Chicken cezar",
    price: 85,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/1d719651a8410e475ac9c4967492f9b8.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b11f6824a28ef9a4bbce819d0c7b1318.jpg",
    inCart: false,
  },
  {
    category: "Salads",
    name: "Greek salad",
    price: 65,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/1d719651a8410e475ac9c4967492f9b8.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b11f6824a28ef9a4bbce819d0c7b1318.jpg",
    inCart: false,
  },
  {
    category: "Salads",
    name: "Beef salad",
    price: 90,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/1d719651a8410e475ac9c4967492f9b8.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b11f6824a28ef9a4bbce819d0c7b1318.jpg",
    inCart: false,
  },
  {
    category: "Salads",
    name: "Shrimp Caesar",
    price: 60,
    currency: "mdl",
    urlImg:
      "https://www.andys.md/public/menu/thumbs/version_220x310x1/b11f6824a28ef9a4bbce819d0c7b1318.jpg",
    bigImg:
      "https://andys.md/public/menu/thumbs/version_712x785x1/b11f6824a28ef9a4bbce819d0c7b1318.jpg",
    inCart: false,
  },
];

const prodCategories = [
  {
    title: "Breakfast",
  },
  {
    title: "Salads",
  },
  {
    title: "Pizza",
  },
];

const footerItems = [
  {
    category: "Company",
    name: "Career",
  },
  {
    category: "Company",
    name: "Feedback",
  },
  {
    category: "Company",
    name: "Contacts",
  },
  {
    category: "Services",
    name: "Corporate clients",
  },
  {
    category: "Services",
    name: "Client card",
  },
  {
    category: "Services",
    name: "Kids parties",
  },
  {
    category: "Services",
    name: "Banquets",
  },
  {
    category: "Delivery",
    name: "Chisinau",
  },
  {
    category: "Delivery",
    name: "Balti",
  },
  {
    category: "Delivery",
    name: "Comrat",
  },
  {
    category: "Delivery",
    name: "Cahul",
  },
  {
    category: "Delivery",
    name: "Ceadir Lunga",
  },
];

const footerCategories = [
  {
    title: "Company",
  },
  {
    title: "Services",
  },
  {
    title: "Delivery",
  },
];

const headerNav = [
  {
    item: "header",
    title: "Menu",
  },
  {
    item: "header",
    title: "Restaurants",
  },
  {
    item: "header",
    title: "News",
  },
];

const navSubm = [
  {
    title: "Pizza",
    type: "Menu",
  },
  {
    title: "Drinks",
    type: "Menu",
  },
  {
    title: "Salads",
    type: "Menu",
  },
  {
    title: "Breakfast",
    type: "Menu",
  },
  {
    title: "Main Dishes",
    type: "Menu",
  },
  {
    title: "Beverages",
    type: "Menu",
  },
  {
    title: "Alcohol",
    type: "Menu",
  },
  {
    title: "Cutlery",
    type: "Menu",
  },
  {
    title: "Andy`s Bakery",
    type: "Menu",
  },
  {
    title: "Cake",
    type: "Menu",
  },
  {
    title: "Dessert",
    type: "Menu",
  },
  {
    title: "Semi-finished products",
    type: "Menu",
  },
  {
    title: "Party menu",
    type: "Menu",
  },
];

const contact = [
  {
    item: "header",
    city: "Chisinau",
    phoneNumber: "022 345 678",
  },
  {
    item: "header",
    city: "Balti",
    phoneNumber: "022 345 345",
  },
  {
    item: "header",
    city: "Cahul",
    phoneNumber: "022 345 345",
  },
  {
    item: "header",
    city: "Comrat",
    phoneNumber: "022 345 345",
  },
  {
    item: "header",
    city: "Ceadâr Lunga",
    phoneNumber: "022 345 345",
  },
];

const partnersData = [
  {
    alt: "LaPlacinte",
    imgUrl: "https://andys.md/assets/img/brands/LaPlacinte.svg",
    redirectUrl: "https://laplacinte.md/",
  },
  {
    alt: "CiaoCacao",
    imgUrl: "https://andys.md/assets/img/brands/CiaoCacao.svg",
    redirectUrl: "https://ciaocacao.md/",
  },
  {
    alt: "Gustland",
    imgUrl: "https://gustland.md/assets/img/Logo.png",
    redirectUrl: "https://gustland.md/",
  },
];

module.exports = {
  prodList,
  prodCategories,
  footerItems,
  footerCategories,
  headerNav,
  navSubm,
  contact,
  partnersData,
};
