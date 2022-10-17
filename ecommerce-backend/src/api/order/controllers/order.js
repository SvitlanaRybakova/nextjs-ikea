'use strict';
const { sanitizeEntity } =  require("@strapi/utils")
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');


