module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alt: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Image.associate = function (models) {
        Image.belongsTo(models.Rental, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Image;
};