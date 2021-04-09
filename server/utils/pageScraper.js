const {filterRecipe} = require('./helperfunctions')

async function scraper(browser, url) {
  let page = await browser.newPage()
  console.log(`Navigating to ${url}...`)
  await page.goto(url)
  await page.waitForSelector('head')

  const html = await page.$eval(
    'script[type="application/ld+json"]',
    e => e.innerHTML
  )
  let objHtml = JSON.parse(html)

  if (objHtml[`@graph`]) {
    ingredientsArray = objHtml[`@graph`].filter(
      obj => 'recipeIngredient' in obj
    )[0].recipeIngredient
    console.log(ingredientsArray)
  } else if (!objHtml.recipeIngredient) {
    ingredientsArray = objHtml.filter(obj => 'recipeIngredient' in obj)[0]
      .recipeIngredient
    console.log(ingredientsArray)
  }
  if (ingredientsArray[0] === undefined)
    ingredientsArray = [
      `We're sorry, the website's not set up for us to grab the recipe`
    ]
  return ingredientsArray
}
module.exports = {scraper}
