'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('orders', 'orederDate', 'orderDate');

    await queryInterface.changeColumn('orders', 'amount', {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 1.0
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('orders', 'oredrDate', 'ordereDate');
    await queryInterface.changeColumn('orders', 'amount', {
      allowNull: false,
      type: Sequelize.FLOAT,
      defaultValue: null
    })
  }
};
