import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Recipe = props => {
  if (!props.recipe) {
    return (
      <div>
        <h2> Loading ingredients... </h2>

        <h3> ... Sorry for the delay, we're filtering out a LOT of ads. </h3>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Ingredients List</h2>
        {props.recipe.map((ingredient, index) => {
          return (
            <div key={index} className="ingredient-container">
              <h3>{ingredient}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    recipe: state.recipe
  }
}

export default connect(mapState)(Recipe)
