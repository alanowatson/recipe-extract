const router = require('express').Router();
const {runPuppeteer} = require('../utils');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const {url} = req.query;

    let ingredientsArray = await runPuppeteer(url);
    res.json(ingredientsArray);
  } catch (err) {
    next(err);
  }
});
