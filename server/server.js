const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const db = require("./app/models");
const {
  createLocationsTable,
  createPartnersTable,
  navSubmenuTable,
  headerNavBarTable,
  productsTable,
  contentCategoryTable,
  footerSubmenuTable,
  footerCategoryTable,
  createRolesTable,
} = require("./createBaseCollections");

const app = express();
const path = require('path');

var corsOptions = {
  origin: "http://localhost:3020",
};

// app.use(express.static(__dirname + '/dist/andys'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Role = db.role;

db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.HOST}:${dbConfig.DB}@cluster0.kmjp0.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Andys App application." });
});

// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname+
//   '/dist/andys/index.html'));});
  

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/headerNav.routes")(app);
require("./app/routes/content.routes")(app);
require("./app/routes/footer.routes")(app);
require("./app/routes/location.routes")(app);
require("./app/routes/partners.routes")(app);
require("./app/routes/contacts.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function initial() {
  createLocationsTable();
  createPartnersTable();
  navSubmenuTable();
  headerNavBarTable();
  productsTable();
  contentCategoryTable();
  footerSubmenuTable();
  footerCategoryTable();
  createRolesTable();
  console.log("succes");
}
