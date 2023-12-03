'use strict';

/**
 * claim-submission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::claim-submission.claim-submission');
