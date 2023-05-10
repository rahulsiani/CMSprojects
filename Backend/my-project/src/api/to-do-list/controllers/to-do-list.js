'use strict';

/**
 * to-do-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::to-do-list.to-do-list');
