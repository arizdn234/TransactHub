const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Item = sequelize.define('items', {
    itemId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    img_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    shop_name: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Item;
