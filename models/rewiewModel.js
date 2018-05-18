module.exports = function(sequelize, DataTypes) {
    var landlord = sequelize.define("landlord", {
      title: {type: DataTypes.STRING, allowNull: false},
      landlord: {type: DataTypes.STRING, allowNull: false},
      review: {type: DataTypes.STRING, allowNull: false},
      rating: {type: DataTypes.INTEGER, allowNull: false},
      apts: {type: DataTypes.BOOLEAN, allowNull: false},
      houses: {type: DataTypes.BOOLEAN, allowNull: false},
      location: {type: DataTypes.STRING, allowNull: false},
    });
 

  landlord.associate = function(models) {
      landlord.hasMany(models.rental, {
          onDelete: "cascade"
      });
      landlord.hasMany(models.sublet, { 
        onDelete: "cascade"
    });
  };
  return landlord;

};