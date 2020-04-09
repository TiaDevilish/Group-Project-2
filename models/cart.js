module.exports = function (sequelize, DataTypes) {
    const Cart = sequelize.define('Cart', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    });
    return Cart;
};
