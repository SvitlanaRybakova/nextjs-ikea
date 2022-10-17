'use strict'

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi.plugin('magic').service('myService').getWelcomeMessage()
  },
})
