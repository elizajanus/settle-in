module.exports = function (sequelize, DataTypes) {
    var sublet = sequelize.define("sublet", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rent: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        roommates: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        baths: {
            type: DataTypes.INTEGER,
            allowNULL: false
        },
        female: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        male: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        pets: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        landlord: {
            type: DataTypes.STRING,
            allowNull: false
        },
        managementContactInfo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageOne: DataTypes.STRING,
        imageTwo: DataTypes.STRING,
        imageThree: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    return sublet;
};