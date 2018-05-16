var express = require("express");

var apartmentRouter = express.Router();

// Import the model (cat.js) to use its database functions.
var apartment = require("../models/apartment.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  apartment.all(function(data) {
    var hbsObject = {
      apartments: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/apartments", function(req, res) {
  apartment.create([
   // "name", "sleepy"
  ], [ ///we need to decide what parameters to insert here...check with Sophia
    //req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/apartments/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  apartment.update({
    //sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/apartments/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = apartmentRouter;
