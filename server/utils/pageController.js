const scraperObject = require('./pageScraper')

async function scrapeAll(browserInstance, url) {
  let browser
  try {
    browser = await browserInstance
    const ingredients = await scraperObject.scraper(browser, url)
    await browser.close()
    console.log('closing browser....')
    return ingredients
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}

module.exports = (browserInstance, url) => scrapeAll(browserInstance, url)
