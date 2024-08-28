// const jwt = require('jsonwebtoken');
// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../models/User');
// const router = express.Router();

// const authenticate = (req, res, next) => {
//     const authHeader = req.header('Authorization');
    
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Access denied' });
//     }

//     const token = authHeader.replace('Bearer ', '');

//     try {
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         console.log('Verified:', verified); // Log verified token for debugging
//         req.user = verified;
//         next();
//     } catch (error) {
//         console.error('Invalid token:', error.message); // Log error for debugging
//         res.status(400).json({ message: 'Invalid token' });
//     }
// };

// // Signup endpoint
// router.post('/signup', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Buat user baru
//         const newUser = await User.create({ email, password: hashedPassword });

//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to create user', error: error.message });
//     }
// });

// // Login endpoint
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//         // Cari user berdasarkan email
//         const user = await User.findOne({ where: { email } });

//         if (!user) {
//             return res.status(401).json({ message: 'Incorrect email or password' });
//         }

//         // Bandingkan password
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(401).json({ message: 'Incorrect email or password' });
//         }

//         // Buat token JWT
//         const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ token });
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to login', error: error.message });
//     }
// });

// module.exports = router;
// module.exports = authenticate;

const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Verified:', verified);
        req.user = verified;
        next();
    } catch (error) {
        console.error('Invalid token:', error.message);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticate;

