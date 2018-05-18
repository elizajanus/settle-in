var db = require("../models");

module.exports = function(app) {
  app.get("/api/sublet", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    db.sublet.findAll({
      include: [db.reviews]
    }).then(function(settle_in) {////what is the name of our database?
      res.json(settle_in);////what is the the name of our database? Eliza...what did you name it?
    });
  });

  app.get("/api/sublet/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.sublet.findOne({
      where: {
        id: req.params.id
      },
      include: [db.reviews]
    }).then(function(settle_in) {
      res.json(settle_in);
    });
  });

  app.post("/api/sublet", function(req, res) {
    db.sublet.create(req.body).then(function(settle_in) {
      res.json(settle_in);
    });
  });

  app.delete("/api/sublet/:id", function(req, res) {
    db.sublet.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(settle_in) {
      res.json(settle_in);
    });
  });

};
