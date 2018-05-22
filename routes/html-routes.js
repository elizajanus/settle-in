// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.


  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  app.get("/apartments", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/apartment.html"));
  });

  app.get("/rentals", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/rentals.html"));
  });

  app.get("/sublets", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/sublets.html"));
  });

  app.get("/roommatessurvey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/roommate.html"));
  });

  app.get("/roommateslisting", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/roommate-listing.html"));
  });

  app.get("/roommates", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/roommate-home.html"));
  });

};