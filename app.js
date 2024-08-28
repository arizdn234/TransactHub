const express = require('express');
const cookieParser = require('cookie-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());

// Documentation Route
app.get('/', (req, res) => {
    res.send(`
        <h1>API Endpoint Documentation</h1>

        <h2>Auth Routes</h2>
        <ul>
            <li><strong>POST /api/auth/signup</strong> - Register a new user</li>
            <li><strong>POST /api/auth/login</strong> - Login with user credentials</li>
            <li><strong>POST /api/auth/logout</strong> - Logout the current user</li>
        </ul>

        <h2>User Routes</h2>
        <ul>
            <li><strong>GET /api/users</strong> - Get profile of the authenticated user</li>
            <li><strong>PUT /api/users</strong> - Update profile of the authenticated user</li>
        </ul>

        <h2>Item Routes</h2>
        <ul>
            <li><strong>POST /api/items</strong> - Create a new item (requires authentication)</li>
            <li><strong>GET /api/items</strong> - Get a list of items (requires authentication)</li>
            <li><strong>PUT /api/items/:itemId</strong> - Update an item by ID (requires authentication)</li>
            <li><strong>DELETE /api/items/:itemId</strong> - Delete an item by ID (requires authentication)</li>
        </ul>

        <h2>Dashboard Routes</h2>
        <ul>
            <li><strong>GET /api/dashboard</strong> - Get dashboard statistics (requires authentication)</li>
        </ul>

        <h2>Transaction Routes</h2>
        <ul>
            <li><strong>GET /api/transaction</strong> - Get a list of transactions (requires authentication)</li>
        </ul>
    `);
});

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/transaction', transactionRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}, http://localhost:${PORT}`);
    });
}).catch(err => {
    console.log('Database connection failed', err);
});

// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
// res.send('Hello World! Ini adalah Website Express.js pertama saya');
// });
// var port = process.env.PORT || 3000;
// app.listen(port);console.log('Listening on localhost:'+ port);


// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It workshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!\n 22222',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();