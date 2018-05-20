module.exports = function (sequelize, DataTypes) {
    var Landlord = sequelize.define("Landlord", {
        // Giving the Landlord model a name of type STRING
        name: DataTypes.STRING
    });

    Landlord.associate = function (models) {
        // Associating Landlord with Reviews
        // When an Landlord is deleted, also delete any associated Reviews
        Landlord.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return Landlord;
};