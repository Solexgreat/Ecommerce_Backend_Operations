'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'password', 'hashed_password');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'hashed_password', 'password')
  }
};
