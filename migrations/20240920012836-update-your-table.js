'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    // await queryInterface.addColumn('carts', 'userId', {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "Users", //Name of the table
    //     key: 'id'
    //   },
    // onUpdate: 'CASCADE',
    // onDelete: 'SET NULL'
    // },
    // );

    await queryInterface.addColumn('carts',
      'productId', {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: 'id'
        },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
      });
    },
    async down (queryInterface, Sequelize) {
      /**
       * Add reverting commands here.
       *
       * Example:
       */
      await queryInterface.removeColumn('carts', 'userId');
      await queryInterface.removeColumn('carts', 'productId');
    }
  }
