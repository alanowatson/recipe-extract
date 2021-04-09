import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getIngredients, removeIngredients} from '../store/recipe';
import {setWebsite, clearWebsite} from '../store/currentSite';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearWebsite();
    this.props.removeIngredients();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const url = evt.target[0].value;
    this.props.getIngredients(url);
    this.props.setWebsite(url);
    this.props.history.push('/recipe');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="url">
              <h3>Enter your recipe link:</h3>
            </label>
            <input
              className="padding"
              type="text-medium"
              placeholder="Paste link here!"
            />
            <div className="buttons_container">
              <button className="btn" type="submit">
                Get Ingredients!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    recipe: state.recipe,
    currentSite: state.currentSite
  };
};

const mapDispatch = (dispatch) => {
  return {
    getIngredients: (url) => dispatch(getIngredients(url)),
    setWebsite: (url) => dispatch(setWebsite(url)),
    clearWebsite: () => dispatch(clearWebsite()),
    removeIngredients: () => dispatch(removeIngredients())
  };
};

export const Search = connect(mapState, mapDispatch)(SearchForm);
