module.exports = function (sequelize, DataTypes) {
  var Rental = sequelize.define("Rental", {
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   validate: {
    //     len: [1] //has to be at least one character
    //   }
    // },
    // body: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    //   validate: {
    //     len: [1] //has to be at least one character
    //   }
    // },
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
      type: DataTypes.INTEGER,
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
    imageOne: DataTypes.STRING,
    imageTwo: DataTypes.STRING,
    imageThree: DataTypes.STRING,
    imageFour: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  return Rental;
};