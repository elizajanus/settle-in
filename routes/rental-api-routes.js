var db = require("../models");

module.exports = function (app) {

  // This is supposed to query just user searches, but not sure about URL name.
  app.get("/api/rentals", function (req, res) {
    console.log("api", req.query);
    db.Rental.findAll({
      where: req.query
    }).then(function (results) {
      res.json(results);
    });
  });

}