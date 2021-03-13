const browserObject = require('./browser')
const pageController = require('./pageController')

const runPuppeteer = url => {
  console.log('inside puppeteer url', url)
  //Start the browser and create a browser instance AND STOPS, then names that window browserInstance
  let browserInstance = browserObject.startBrowser()

  // Pass the browser instance to the scraper controller

  return pageController(browserInstance, url)
}

module.exports = {runPuppeteer}
