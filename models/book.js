module.exports = function (sequelize, DataTypes) {
    const Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        jpegImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author:DataTypes.STRING
    });
    return Book;
};
  