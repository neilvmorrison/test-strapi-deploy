'use strict';

/**
 * class-member router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::class-member.class-member');
