const router = require('express').Router()
const {runPuppeteer} = require('../utils')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const {url} = req.query

    console.log('req.query', req.query)
    let ingredientsArray = await runPuppeteer(url)
    await console.log('ingredientsArray', ingredientsArray)
    res.json(ingredientsArray)
  } catch (err) {
    next(err)
  }
})
