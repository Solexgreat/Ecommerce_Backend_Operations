'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'password', 'hashed_password');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'hashed_password', 'password')
  }
};
