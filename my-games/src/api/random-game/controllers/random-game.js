'use strict';

/**
 * random-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::random-game.random-game');
