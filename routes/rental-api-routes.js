var db = require("../models");

// need to review what the database is called before uploading it
module.exports = function (app) {
  app.get("/api/rentals", function (req, res) {
    db.Rental.findAll({}).then(function (dbRental) {
      res.json(dbRental);
    });
  });

  app.get("/api/rentals/:id", function (res, req) {
    db.Rental.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbRental) {
      res.json(dbRental);
    });
  });

  app.post("/api/rentals", function (req, res) {
    console.log(req.body);
    db.Rental.create(req.body).then(function (dbRental) {
      res.json(dbRental);
    });
  });

  app.delete("api/rentals/:id", function (req, res) {
    db.Rental.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRental) {
      res.json(dbRental);
    });
  });
};