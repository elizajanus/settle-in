module.exports = function(sequelize, DataTypes) {
    var sublet = sequelize.define("sublet", {
      title: {type: DataTypes.STRING, allowNull: false},
      description: {type: DataTypes.STRING, allowNull: false},
      rent: {type: DataTypes.INT, allowNull: false},
      roommates: {type: DataTypes.INT, allowNull: false},
      baths: {type: DataTypes.DEC, allowNULL: false},
      female: {type: DataTypes.BOOLEAN, allowNull: false},
      male: {type: DataTypes.BOOLEAN, allowNull: false},
      pets: {type: DataTypes.BOOLEAN, allowNull: false},
      city: {type: DataTypes.BOOLEAN, allowNull: false},
      location: {type: DataTypes.STRING, allowNull: false},
      landlord: {type: DataTypes.STRING, allowNull: false},
      managementContactInfo: {type: DataTypes.STRING, allowNull: false}
    });
 

  sublet.associate = function(models) {
      sublet.belongsTo(models.reviews, {
          foreignKey: {
              allowNull: false
          }
      }); 
  };
  return sublet;

};