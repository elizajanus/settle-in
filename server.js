// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/rental-api-routes.js")(app);
require("./routes/reviews-routes.js")(app);
require("./routes/roommate-routes.js")(app);
require("./routes/sublet-routes.js")(app);
//require("./routes/roommate-survey-routes.js")(app);
require("./routes/landlord-api-routes.js")(app);
require("./routes/review-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//db.sequelize
//.query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
//.then(function(results) {
db.sequelize.sync({
  force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});