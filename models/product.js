'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany (models.Order, {foreignKey: "productId", as: 'order'})
      Product.hasMany (models.Cart, {foreignKey: "productId", as: "cart"})
      Product.hasMany (models.Review, {foreignKey: "productId", as: 'review'})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    brand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};