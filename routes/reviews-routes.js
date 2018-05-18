var db = require("../models");

module.exports = function(app) {
  app.get("/api/reviews", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    db.reviews.findAll({
      include: [db.landlord]
    }).then(function(apartmentdb) {////what is the name of our database?
      res.json(apartmentdb);////what is the the name of our database? Eliza...what did you name it?
    });
  });

  app.get("/api/reviews/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.reviews.findOne({
      where: {
        id: req.params.id
      },
      include: [db.landlord]
    }).then(function(apartmentdb) {
      res.json(apartmentdb);
    });
  });

  app.post("/api/reviews", function(req, res) {
    db.reviews.create(req.body).then(function(apartmentdb) {
      res.json(apartmentdb);
    });
  });

  app.delete("/api/reviews/:id", function(req, res) {
    db.reviews.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(apartmentdb) {
      res.json(apartmentdb);
    });
  });

};
