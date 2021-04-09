import axios from 'axios';

const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

const initialState = [];

const fetchIngredients = (ingredients) => ({
  type: FETCH_INGREDIENTS,
  ingredients
});

const clearIngredients = () => ({
  type: CLEAR_INGREDIENTS
});

export const getIngredients = (url) => async (dispatch) => {
  try {
    const ingredients = await axios.get('/api/recipe', {
      params: {
        url: url
      }
    });
    await dispatch(fetchIngredients(ingredients.data));
  } catch (err) {
    console.error(err);
  }
};

export const removeIngredients = () => async (dispatch) => {
  try {
    await dispatch(clearIngredients());
  } catch (err) {
    console.error(err);
  }
};

export default function (state = initialState, action) {
  console.log('------------------------------------');
  console.log('------inside reducer--------');
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return action.ingredients;
    case CLEAR_INGREDIENTS:
      return initialState;
    default:
      return state;
  }
}
