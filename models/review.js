'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     *  npx sequelize-cli model:generate --name Review --attributes rate:FLOAT,comment:STRING 
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Product, {foreignKey:"productId", as:"product"});
      Review.belongsTo(models.User, {foreignKey: "userId", as: "user"})

    }
  }
  Review.init({
    rate: DataTypes.FLOAT,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};