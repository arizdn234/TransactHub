const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    midtrans_id: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    payment_method: {
        type: DataTypes.STRING(120),
        allowNull: true
    },
    transaction_status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        defaultValue: 'pending',
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    expired_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'booking_transactions',
    timestamps: false,
});

module.exports = Transaction;