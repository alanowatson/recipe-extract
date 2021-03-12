const router = require('express').Router()
const {Recipe} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const recipe = await Recipe.findAll({})
    res.json(users)
  } catch (err) {
    next(err)
  }
})
