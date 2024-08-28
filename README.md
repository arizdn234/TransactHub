# TransactHub Project Documentation

## Project Overview

TransactHub is a backend application built with Node.js and Express. The application handles user authentication, transactions, and item data management using MySQL as the database and Sequelize as the ORM.

## Project Structure

- **config/**: Contains configuration files, including `db.js` for database settings.
- **controllers/**: Contains business logic controllers, handling various functionalities such as authentication, item management, and transactions.
- **middleware/**: Custom middleware functions, including authentication middleware.
- **models/**: Defines database models for items, transactions, and users.
- **routes/**: Defines application routes, connecting endpoints to controllers.
- **app.js**: Main entry point of the application.
- **package.json**: Project metadata and dependency management.

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone <REPOSITORY_URL>
    cd <PROJECT_NAME>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Environment Setup:**

   Create a `.env` file in the root directory and configure your environment variables as needed. Example:

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=database_name
    ```

4. **Run the Application:**

    - Development Mode:

      ```bash
      npm run dev
      ```

    - Production Mode:

      ```bash
      npm start
      ```

## Feature Development Documentation

### 1. **User Authentication**

   - **Files**: `auth.controller.js`, `authRoutes.js`, `auth.js`
   - **Description**: Handles user login, registration, and token-based authentication.
   - **Endpoints**:
     - `POST /auth/login`: User login.
     - `POST /auth/register`: User registration.

### 2. **Dashboard Management**

   - **Files**: `dashboard.controller.js`, `dashboardRoutes.js`
   - **Description**: Provides data for user-specific dashboard views.
   - **Endpoints**:
     - `GET /dashboard`: Fetches user-specific dashboard data.

### 3. **Item Management**

   - **Files**: `item.controller.js`, `itemRoutes.js`, `Item.js`
   - **Description**: Handles CRUD operations for items.
   - **Endpoints**:
     - `GET /items`: Fetch all items.
     - `POST /items`: Create a new item.
     - `PUT /items/:id`: Update item details.
     - `DELETE /items/:id`: Delete an item.

### 4. **Transaction Handling**

   - **Files**: `transaction.controller.js`, `transactionRoutes.js`, `Transaction.js`
   - **Description**: Manages transactions between users.
   - **Endpoints**:
     - `GET /transactions`: List all transactions.
     - `POST /transactions`: Create a new transaction.

### 5. **User Management**

   - **Files**: `user.controller.js`, `userRoutes.js`, `User.js`
   - **Description**: Handles user-related data operations.
   - **Endpoints**:
     - `GET /users`: Retrieve user list.
     - `GET /users/:id`: Fetch a specific user.
     - `PUT /users/:id`: Update user details.

## Available Scripts

- **`npm start`**: Runs the application using `node app.js`.
- **`npm run dev`**: Runs the application in development mode using `nodemon`.

## Contribution Guidelines

1. Fork the repository and clone it locally.
2. Create a new feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
