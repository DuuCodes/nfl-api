'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      try {
        await queryInterface.createTable('teams', {
          type: Sequelize.STRING
        });
        await queryInterface.createTable('teams', {
          type: Sequelize.STRING
        });
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    },
  
    return queryInterface('teams', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKeys: true,
      }
    }, {
      name: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTables('teams', null, {})
  }
};