'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Orders', 'amount', {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 1.0
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Orders', 'amount', {
      allowNull: false,
      type: Sequelize.FLOAT,
      defaultValue: 1.0
    })
  }
};
