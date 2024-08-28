const { Sequelize } = require('sequelize');
const Transaction = require("../models/Transaction.js");

const Dashboard = async (req, res) => {
    try {
        const result = await Transaction.findOne({
            attributes: [
                [Sequelize.fn('SUM', Sequelize.literal(`CASE WHEN amount > 0 THEN amount ELSE 0 END`)), 'total_uang_masuk'],
                [Sequelize.fn('SUM', Sequelize.literal(`CASE WHEN amount < 0 THEN amount ELSE 0 END`)), 'total_uang_keluar'],
                [Sequelize.fn('COUNT', Sequelize.fn('DISTINCT', Sequelize.col('user_id'))), 'total_pengunjung'],
                [Sequelize.fn('COUNT', Sequelize.col('*')), 'total_order']
            ],
            where: {
                transaction_status: 'completed'
            }
        });

        const dashboardData = result.get({ plain: true });
        res.status(200).json(dashboardData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving dashboard data.', error });
    }
};

module.exports = { Dashboard };
