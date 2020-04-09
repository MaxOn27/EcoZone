const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db_users = require("./app/models/user_index");
db_users.sequelize.sync();
require("./app/routes/user.routes")(app);

const db_adverts = require("./app/models/advert_index");
db_adverts.sequelize.sync();
require("./app/routes/advert.routes")(app);

const db_roles = require("./app/models/user_index");
db_roles.sequelize.sync();
const Role = db_roles.role;
require('./app/routes/auth.routes')(app);

// drop the table if it already exists
// db_users.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db_users.");
// });
// db_adverts.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db_adverts.");
// });
// db_roles.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });



const Advert= db_adverts.adverts;
const Users = db_users.users;

Users.hasMany(Advert);
Advert.belongsTo(Users);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Max Tyzhnenko's application." });
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});