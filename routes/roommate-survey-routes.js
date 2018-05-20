var db = require("../models");

module.exports = function(app) {
  app.get("/api/survey", function(req, res) {

    db.Survey.findAll({
      include: [db.Roommates]
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  app.get("/api/survey/:id", function(req, res) {
   
    db.Survey.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Roommates]
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  app.post("/api/survey", function(req, res) {
    db.Survey.create({
      smoking: req.body.question1,
      pets: req.body.question2,
      ground: req.body.question3,
      nightowl: req.body.question4,
      clean: req.body.question5,
      entertainer: req.body.question6,
      religious: req.body.question7,
      samegender: req.body.question8,
      allergies: req.body.question9,
      relationship: req.body.question10,
      roommaterelationship: req.body.question11,
      groceries: req.body.question12,
      bathroom: req.body.question13,
      cooking: req.body.question14,
      pricerange: req.body.question15,
      veg: req.body.question16,
      personality: req.body.question17,
      kids: req.body.question18,
      freetime: req.body.question19,
      wfh: req.body.question20

    }).then(function(dbSurvey) {
      res.json(dbSurvey); 
    });
  });

  app.delete("/api/survey/:id", function(req, res) {
    db.Survey.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

};