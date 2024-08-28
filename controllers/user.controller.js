const User = require('../models/User.js');

const getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['username', 'fullname', 'email', 'phone_number', 'password_hash']
        });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user profile', error });
    }
};

const updateUser = async (req, res) => {
    const { username, fullname, email, phone_number, password } = req.body;
    try {
        const user = await User.findByPk(req.user.id)
        const hashedPassword = await bcrypt.hash(password, 10);
        if (user) {
            user.username = username;
            user.fullname = fullname;
            user.email = email;
            user.phone_number = phone_number;
            user.password_hash = hashedPassword;
            await user.save();
            res.json({ message: 'User updated successfully', user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

module.exports = { getProfile, updateUser };
