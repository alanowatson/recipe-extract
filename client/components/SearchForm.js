import React, {Component} from 'react'
import {getIngredients} from '../store/recipe'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const url = evt.target[0].value
    console.log('handleSubmit URL', url)
    this.props.getIngredients(url)
    this.props.history.push('/recipe')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="url">
              <small>Enter your recipe</small>
            </label>
            <input type="text" placeholder="Paste link here!" />
            <div>
              <button type="submit">Get Ingredients!</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    recipe: state.recipe
  }
}

const mapDispatch = dispatch => {
  return {
    getIngredients: url => dispatch(getIngredients(url))
  }
}

export const Search = connect(mapState, mapDispatch)(SearchForm)
