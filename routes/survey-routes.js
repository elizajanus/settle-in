var db = require("../models");

module.exports = function(app) {

  app.post("/api/survey", function(req, res) {
    console.log(req.body);
    res.status(200).end();
  })

};
