# E-commerce Backend Operations
Welcome to the E-commerce Backend Operations repository! This project is designed to provide a robust backend solution for e-commerce applications, allowing users to manage products, their shopping carts, orders, and reviews seamlessly with ease.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features
- **User Authentication**: Secure JWT-based authentication for user login and registration.
- **Product Management**: CRUD operations for managing products in the inventory.
- **Shopping Cart**: Add, remove, and view items in the user's shopping cart.
- **Order Processing**: Place and manage user orders.
- **Product Reviews**: Allow users to leave reviews and ratings for products.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js to handle server-side logic.
- **MySQL**: Relational database for storing user, product, and order data.
- **Sequelize**: ORM for interacting with MySQL.
- **JWT**: JSON Web Tokens for secure authentication.

## API Documentation
You can find the complete API documentation for this project, including endpoints for Users, Products, Cart, Orders, and Reviews, at the following link:

- [Users API Documentation](https://documenter.getpostman.com/view/35184158/2sAXqwZfBv)
- [Review API Documentation](https://documenter.getpostman.com/view/35184158/2sAXqwZfC4)
- [Products API Documentation](https://documenter.getpostman.com/view/35184158/2sAXqwZfGU)
- [Order API Documentation ](https://documenter.getpostman.com/view/35184158/2sAXqwZfRE)
- [Cart API Documentation](https://documenter.getpostman.com/view/35184158/2sAXqwZfVb)

## Installation
To get started with this project, follow these steps:

** Clone the repository **:

```
git clone https://github.com/Solexgreat/Ecommerce_Backend_Operations.git
cd Ecommerce_Backend_Operations
```
## Install dependencies via: 
```
npm install
```
 ** Set up environment variables**: Create a .env file in the root directory and define your database connection settings:

```
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
```
** Run migrations **: Use Sequelize to run the migrations for setting up your database tables:
```
npx sequelize-cli db:migrate
```
Start the server:
```
node app.js
```
## Usage
Once the server is running, you can interact with the API using your preferred tool (like Postman) or integrate it with a front-end application. Make sure to authenticate users to access certain endpoints.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.
