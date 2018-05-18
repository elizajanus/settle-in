module.exports = function (sequelize, DataTypes) {
  var Rental = sequelize.define("Rental", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1] //has to be at least one character
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1] //has to be at least one character
      }
    },
    streetAddress1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetAddress2: DataTypes.STRING,
    cityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    beds: DataTypes.INTEGER,
    baths: DataTypes.DECIMAL,
    sqFeet: DataTypes.INTEGER,
    pets: DataTypes.BOOLEAN,
    landlord: DataTypes.STRING,
    managementContactInfo: DataTypes.STRING,
  });

  Rental.associate = function (models) {
    Rental.belongsTo(models.reviews, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Rental;
};