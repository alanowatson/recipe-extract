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

  return filterRecipe(objHtml)
}
module.exports = {scraper}
