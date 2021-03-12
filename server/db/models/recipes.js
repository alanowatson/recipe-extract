const Sequelize = require('sequelize')
const db = require('../db')

const Recipes = db.define('recipes', {
  Url: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  Ingredients: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    unique: false,
    allowNull: false,
  },
})

module.exports = Recipes
