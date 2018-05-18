module.exports = function(sequelize, DataTypes) {
    var sublet = sequelize.define("sublet", {
      title: {type: DataTypes.STRING, allowNull: false},
      description: {type: DataTypes.STRING, allowNull: false},
      rent: {type: DataTypes.INT, allowNull: false},
      roommates: {type: DataTypes.INT, allowNull: false},
      female: {type: DataTypes.BOOLEAN, allowNull: false},
      male: {type: DataTypes.BOOLEAN, allowNull: false},
      city: {type: DataTypes.BOOLEAN, allowNull: false},
      location: {type: DataTypes.STRING, allowNull: false},
    });
 

  sublet.associate = function(models) {
      sublet.belongsTo(models.landlord, {///where does this belong?????
          foreignKey: {
              allowNull: false
          }
      }); 
  };
  return sublet;

};