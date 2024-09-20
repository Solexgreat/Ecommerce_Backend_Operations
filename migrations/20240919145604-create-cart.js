'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", //Name of the table
          key: 'id'
        },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: 'id'
        },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts');
  }
};