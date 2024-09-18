'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn('products', 'ratings', {
    //   type: DataTypes.FLOAT,
    //   allowNull: true,
    // })
    await queryInterface.addColumn('products', 'images', {
      type: DataTypes.JSON,
      allowNull: true,
    })

    await queryInterface.addColumn('products', 'color', {
      type: DataTypes.STRING,
      allowNull: true,
    })

    await queryInterface.addColumn('products', 'size', {
      type: DataTypes.STRING,
      allowNull: true,
    })

    await queryInterface.addColumn('products', 'weight', {
      type: DataTypes.FLOAT,
      allowNull: true,
    })

    await queryInterface.addColumn('products', 'dimensions', {
      type: DataTypes.FLOAT,
      allowNull: true,
    })

    await queryInterface.addColumn('products', 'discount', {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // await queryInterface.removeColumn('products', 'brand');
    // await queryInterface.removeColumn('products', 'stock');
    // await queryInterface.removeColumn('products', 'ratings');
    await queryInterface.removeColumn('products', 'images');
    await queryInterface.removeColumn('products', 'color');
    await queryInterface.removeColumn('products', 'size');
    await queryInterface.removeColumn('products', 'weight');
    await queryInterface.removeColumn('products', 'dimensions');
    await queryInterface.removeColumn('products', 'discount');
  }
};
