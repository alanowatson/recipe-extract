import axios from 'axios'

/**
 * ACTION TYPES
 */
const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
const fetchIngredients = ingredients => ({
  type: FETCH_INGREDIENTS,
  ingredients
})

/**
 * THUNK CREATORS
 */
export const getIngredients = url => async dispatch => {
  try {
    console.log('------------------------------------')
    console.log('------inside thunk creator--------')

    console.log('url', url) //https://www.allrecipes.com/recipe/47044/spinach-and-potato-frittata/"}

    const ingredients = await axios.get('/api/recipe', {
      params: {
        url: url
      }
    })

    // const ingredients = await axios
    //   .get(`/api/recipe`, {
    //     method: 'GET',
    //     body: JSON.stringify({
    //       url: url,
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))

    await console.log('ingredients', ingredients.data)
    //2nd object can be the req.body with keys we want to send.
    await dispatch(fetchIngredients(ingredients.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  console.log('------------------------------------')
  console.log('------inside reducer--------')
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return action.ingredients
    default:
      return state
  }
}
