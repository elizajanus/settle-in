module.exports = function(sequelize, DataTypes) {
    var Survey = sequelize.define("Survey", {
      smoking: {type: DataTypes.BOOLEAN, allowNull: false},
      pets: {type: DataTypes.BOOLEAN, allowNull: false},
      ground: {type: DataTypes.BOOLEAN, allowNull: false},
      nightowl: {type: DataTypes.BOOLEAN, allowNull: false},
      clean: {type: DataTypes.BOOLEAN, allowNull: false},
      entertainer: {type: DataTypes.BOOLEAN, allowNull: false},
      religious: {type: DataTypes.BOOLEAN, allowNull: false},
      samegender: {type: DataTypes.BOOLEAN, allowNull: false},
      allergies: {type: DataTypes.STRING, allowNull: false},
      relationship: {type: DataTypes.BOOLEAN, allowNull: false},
      roommaterelationship: {type: DataTypes.BOOLEAN, allowNull: false},
      groceries: {type: DataTypes.BOOLEAN, allowNull: false},
      bathroom: {type: DataTypes.BOOLEAN, allowNull: false},
      cooking: {type: DataTypes.BOOLEAN, allowNull: false},
      pricerange: {type: DataTypes.STRING, allowNull: false},
      veg: {type: DataTypes.BOOLEAN, allowNull: false},
      personality: {type: DataTypes.STRING, allowNull: false},
      kids: {type: DataTypes.BOOLEAN, allowNull: false},
      freetime: {type: DataTypes.STRING, allowNull: false},
      wfh: {type: DataTypes.BOOLEAN, allowNull: false}
    });
 

  Survey.associate = function(models) {
      Survey.belongsTo(models.Roommate, {
          foreignKey: {
              allowNull: false
          }
      }); 
  };
  return Survey;

};