module.exports = function(sequelize, DataTypes) {
    var Roommate = sequelize.define("Roommate", {
      name: {type: DataTypes.STRING, allowNull: false},
      email: {type: DataTypes.STRING, allowNull: false},
      age: {type: DataTypes.INTEGER, allowNull: false},
      phone: {type: DataTypes.STRING, allowNull: false},
      gender: {type: DataTypes.STRING, allowNull: false},
      smoking: {type: DataTypes.BOOLEAN, defaultValue: false},
      pets: {type: DataTypes.BOOLEAN, defaultValue: false},
      ground: {type: DataTypes.BOOLEAN, defaultValue: false},
      nightowl: {type: DataTypes.BOOLEAN, defaultValue: false},
      clean: {type: DataTypes.BOOLEAN, defaultValue: false},
      entertainer: {type: DataTypes.BOOLEAN, defaultValue: false},
      religious: {type: DataTypes.BOOLEAN, defaultValue: false},
      samegender: {type: DataTypes.BOOLEAN, defaultValue: false},
      allergies: {type: DataTypes.STRING, defaultValue: "None"},
      relationship: {type: DataTypes.BOOLEAN, defaultValue: false},
      roommaterelationship: {type: DataTypes.BOOLEAN, defaultValue: false},
      groceries: {type: DataTypes.BOOLEAN, defaultValue: false},
      bathroom: {type: DataTypes.BOOLEAN, defaultValue: false},
      cooking: {type: DataTypes.BOOLEAN, defaultValue: false},
      pricerange: {type: DataTypes.STRING, defaultValue: "None"},
      veg: {type: DataTypes.BOOLEAN, defaultValue: false},
      personality: {type: DataTypes.STRING, defaultValue: "None"},
      kids: {type: DataTypes.BOOLEAN, defaultValue: false},
      freetime: {type: DataTypes.STRING, defaultValue: "None"},
      wfh: {type: DataTypes.BOOLEAN, defaultValue: false}
    });
    return Roommate;  
  };

