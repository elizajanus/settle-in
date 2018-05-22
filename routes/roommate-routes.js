var db = require("../models");

module.exports = function(app) {
  app.get("/api/roommates", function(req, res) {

    db.Roommate.findAll({
    }).then(function(dbRoommate) {
      res.json(dbRoommate);
    });
  });

  app.get("/api/roommates/:id", function(req, res) {
   
    db.Roommate.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoommate) {
      res.json(dbRoommate);
    });
  });

  app.post("/api/roommates", function(req, res) {
    console.log(req.body);
    db.Roommate.create(req.body).then(function(dbRoommate) {
      res.json(dbRoommate);
    });
  });

  app.delete("/api/roommates/:id", function(req, res) {
    db.Roommate.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoommate) {
      res.json(dbRoommate);
    });
  });

  app.put("/api/roommates/:id", function(req, res) {
    db.Roommate.update(
      req.image,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbImage) {
      res.json(dbImage);
    });
  });

};
