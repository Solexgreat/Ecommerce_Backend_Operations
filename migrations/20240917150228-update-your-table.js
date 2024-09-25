'use strict';

const { DataTypes } = require('sequelize');

//npx sequelize-cli migration:generate --name update-your-table

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn('Products', 'brand', {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // })

    // await queryInterface.changeColumn('Products', 'stock', {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // })

    // await queryInterface.addColumn('Products', 'ratings', {
    //   type: DataTypes.FLOAT,
    //   allowNull: true,
    // })

    await queryInterface.addColumn('Products', 'images', {
      type: DataTypes.TEXT,
      allowNull: true,
    })

    await queryInterface.addColumn('Products', 'color', {
      type: DataTypes.STRING,
      allowNull: true,
    })

    await queryInterface.addColumn('Products', 'size', {
      type: DataTypes.STRING,
      allowNull: true,
    })

    await queryInterface.addColumn('Products', 'weight', {
      type: DataTypes.FLOAT,
      allowNull: true,
    })

    await queryInterface.addColumn('Products', 'dimensions', {
      type: DataTypes.FLOAT,
      allowNull: true,
    })

    await queryInterface.addColumn('Products', 'discount', {
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
    await queryInterface.removeColumn('Products', 'category');
    await queryInterface.removeColumn('Products', 'brand');
    await queryInterface.removeColumn('Products', 'stock');
    await queryInterface.removeColumn('Products', 'ratings');
    await queryInterface.removeColumn('Products', 'images');
    await queryInterface.removeColumn('Products', 'color');
    await queryInterface.removeColumn('Products', 'size');
    await queryInterface.removeColumn('Products', 'weight');
    await queryInterface.removeColumn('Products', 'dimensions');
    await queryInterface.removeColumn('Products', 'discount');
  }
};
