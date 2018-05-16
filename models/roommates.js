module.exports = function(sequelize, DataTypes) {
    var Roommate = sequelize.define("Roommate", {
      name: {type: DataTypes.STRING, allowNull: false},
      email: {type: DataTypes.STRING, allowNull: false},
      age: {type: DataTypes.INTEGER, allowNull: false},
      phone: {type: DataTypes.STRING, allowNull: false},
      gender: {type: DataTypes.STRING, allowNull: false}
    });
 

  Roommate.associate = function(models) {
      Roommate.hasMany(models.Survey, {
          onDelete: "cascade"
      });
      
  };
  return Roommate;

};