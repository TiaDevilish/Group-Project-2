module.exports = function (sequelize, DataTypes) {
    const CartItem = sequelize.define('CartItem', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    });
    return CartItem;
};
