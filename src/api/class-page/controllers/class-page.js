"use strict";

/**
 * class-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::class-page.class-page",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service("api::class-page.class-page")
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(results[0]);
    },
  })
);
