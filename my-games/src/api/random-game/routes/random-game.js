'use strict';

/**
 * random-game router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::random-game.random-game');
