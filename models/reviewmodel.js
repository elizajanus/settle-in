module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Review.associate = function (models) {
        // We're saying that a Review should belong to an Landlord
        // A Review can't be created without a Landlord due to the foreign key constraint
        Review.belongsTo(models.Landlord, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Review;
};