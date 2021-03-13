/**
 * ACTION TYPES
 */
const SET_WEBSITE = 'SET_WEBSITE'
const CLEAR_WEBSITE = 'CLEAR_WEBSITE'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const setUrl = url => ({
  type: SET_WEBSITE,
  url
})

const loseUrl = () => ({
  type: CLEAR_WEBSITE
})

/**
 * THUNK CREATORS
 */
export const setWebsite = url => async dispatch => {
  try {
    console.log('------------------------------------')
    console.log('------inside URL thunk creator--------')

    await dispatch(setUrl(url))
  } catch (err) {
    console.error(err)
  }
}

export const clearWebsite = () => async dispatch => {
  try {
    await dispatch(loseUrl())
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  console.log('------------------------------------')
  console.log('------inside URL reducer--------')
  switch (action.type) {
    case SET_WEBSITE:
      return action.url
    case CLEAR_WEBSITE:
      return initialState
    default:
      return state
  }
}
