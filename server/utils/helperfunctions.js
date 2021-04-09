const filterRecipe = objHtml => {
  let finalArray = []
  if (objHtml[`@graph`]) {
    console.log(objHtml[`@graph`])
    ingredientsArray = objHtml[`@graph`].filter(
      obj => 'recipeIngredient' in obj
    )[0].recipeIngredient
    console.log(ingredientsArray)
  } else if (!objHtml.recipeIngredient) {
    finalArray = objHtml.filter(obj => 'recipeIngredient' in obj)[0]
      .recipeIngredient
    console.log(ingredientsArray)
  }
  if (finalArray[0] === undefined)
    finalArray = [
      `We're sorry, the website's not set up for us to grab the recipe`
    ]
}

module.exports = {filterRecipe}
