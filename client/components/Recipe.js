import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

const Recipe = props => {
  // console.log('state', this.state) // undefined
  // console.log('state', state)

  if (!props.recipe.length) {
    return (
      <div>
        <h2>
          {`Loading ingredients from ${props.currentSite.slice(0, 30)}...`}
        </h2>

        <h3> ... Sorry for the delay, we're filtering out a LOT of ads. </h3>
      </div>
    )
  } else {
    return (
      <div>
        <h2>{props.currentSite}</h2>
        <ul>Ingredients List</ul>
        {props.recipe.map((ingredient, index) => {
          return (
            <li key={index} className="ingredient-container">
              {ingredient}
            </li>
          )
        })}
        <p>Click the "Home" at the top start over</p>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  recipe: state.recipe,
  currentSite: state.currentSite
})

export default connect(mapState)(Recipe)
