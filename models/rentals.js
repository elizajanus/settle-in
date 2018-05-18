module.exports = function(sequelize, DataTypes) {
  var Rental = sequelize.define("Rental", {
    title: {
      //this is going to be address, city, state, zip
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1] //has to be at least one character
      }
    },
    body: {
      //this is going to contain all of the info about the rental - see below commented out
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    // streetNumber: DataTypes.INTEGER,
    // streetName: DataTypes.STRING,
    // cityName: DataTypes.STRING,
    // stateName: DataTypes.STRING,
    // zipCode: DataTypes.STRING,
    // price: DataTypes.INTEGER,
    // beds: DataTypes.INTEGER,
    // bath: DataTypes.INTEGER,
    // sqFeet: DataTypes.INTEGER,
    // pets: DataTypes.BOOLEAN,
    // contactName: DataTypes.STRING,
    // contactNumber: DataTypes.INTEGER
  });

  Rental.associate = function(models) {
    Rental.belongsTo(models.landlord, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Rental;
};
