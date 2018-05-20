var db = require("../models");

module.exports = function (app) {
    app.get("/api/landlords", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Landlord.findAll({
            include: [db.Review]
        }).then(function (dbLandlord) {
            res.json(dbLandlord);
        });
    });

    app.get("/api/landlords/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Landlord.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Review]
        }).then(function (dbLandlord) {
            res.json(dbLandlord);
        });
    });

    app.post("/api/landlords", function (req, res) {
        db.Landlord.create(req.body).then(function (dbLandlord) {
            res.json(dbLandlord);
        });
    });

    app.delete("/api/landlords/:id", function (req, res) {
        db.Landlord.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbLandlord) {
            res.json(dbLandlord);
        });
    });

};