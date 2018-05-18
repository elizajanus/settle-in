var db = require("../models");

module.exports = function(app) {
  app.get("/api/roommates", function(req, res) {

    db.Roommate.findAll({
      include: [db.Survey]
    }).then(function(dbRoommate) {
      res.json(dbRoommate);
    });
  });

  app.get("/api/roommates/:id", function(req, res) {
   
    db.Roommate.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Survey]
    }).then(function(dbRoommate) {
      res.json(dbRoommate);
    });
  });

  app.post("/api/roommates", function(req, res) {
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

};
