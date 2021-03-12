const fs = require('fs')

let ingredientsArray = []
console.log('ingredientsArrayTop', ingredientsArray)

const scraperObject = {
  // Allrecipies

  url: 'https://www.allrecipes.com/recipe/240667/creamy-potato-and-leek-soup/',
  async scraper(browser) {
    let page = await browser.newPage()
    console.log(`Navigating to ${this.url}...`)
    await page.goto(this.url)
    await page.waitForSelector('body')
    // get all standard data
    const html = await page.$eval(
      'script[type="application/ld+json"]',
      (e) => e.innerHTML
    )
    const objHtml = JSON.parse(html)
    // console.log(html)

    // console.log(objHtml)
    // console.log(objHtml[`@graph`])
    ingredientsArray = objHtml[1].recipeIngredient
    console.log(ingredientsArray)
    fs.appendFile('ingredients.js', JSON.stringify(ingredientsArray), (err) => {
      if (err) console.error('Woops, File not appended')
      console.log('The file has been saved!')
    })
  },

  // FOOD NETWORK
  // url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/zucchini-enchiladas-3757866',
  // async scraper(browser) {
  //   let page = await browser.newPage();
  //   console.log(`Navigating to ${this.url}...`);
  //   await page.goto(this.url);
  //   await page.waitForSelector('body');
  //   // get all standard data
  //   const html = await page.$eval('script[type="application\/ld\+json"]', e => e.innerHTML)
  //   const objHtml = JSON.parse(html)
  //   // console.log(html)

  //   console.log(objHtml)
  //   // need to devise a Depth first search to find the index of the nexted objects that have recipeIngrediet
  //   // pass that into the objectHTML to isolate the ingredient
  //   console.log(objHtml[0].recipeIngredient)

  // }

  //   async scraper(browser) {
  //   let page = await browser.newPage();
  //   console.log(`Navigating to ${this.url}...`);
  //   await page.goto(this.url);
  //   await page.waitForSelector('.headline-wrapper');
  //   // get all standard data
  //   const html = await page.$eval('.yoast-schema-graph', e => e.innerHTML)
  //   const objHtml = JSON.parse(html)
  //   console.log(objHtml.recipeIngredient)
  // }
}
console.log('ingredientsArray Bottom', ingredientsArray)

// find Ingredients (HOW)
//https://browsee.io/blog/puppeteer-how-to-find-a-link-element-with-a-certain-text/
//https://github.com/puppeteer/puppeteer/issues/2009

// filter for ingredients

// let aTags = document.getElementsByTagName('a');
// const searchText = 'Ingredients';
// let found;

// for (var i = 0; i < aTags.length; i++) {
//   if (aTags[i].textContent == searchText) {
//     found = aTags[i];
//     break;
//   }
// }

//All Recipies - once you find ingredients, it's the next sibling find the UL's class: ingredient xs-mb1 xs-mt0

// Tasty - once you find ingredients, grab the whole parent, find all the ULs? classname "ingredients Item"

module.exports = scraperObject
