module.exports = function(sequelize, DataTypes) {
    var reviews = sequelize.define("reviews", {
      title: {type: DataTypes.STRING, allowNull: false},
      landlord: {type: DataTypes.STRING, allowNull: false},
      review: {type: DataTypes.STRING, allowNull: false},
      rating: {type: DataTypes.INTEGER, allowNull: false},
      apartments: {type: DataTypes.BOOLEAN, allowNull: false},
      houses: {type: DataTypes.BOOLEAN, allowNull: false},
      managementContactInfo: {type: DataTypes.STRING, allowNull: false},
    });
 

  reviews.associate = function(models) {
      reviews.hasMany(models.Rental, {
          onDelete: "cascade"
      });
      reviews.hasMany(models.sublet, { 
        onDelete: "cascade"
    });
  };
  return reviews;

};