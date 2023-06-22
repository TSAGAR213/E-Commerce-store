'use strict';

/**
 * random-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::random-game.random-game');
