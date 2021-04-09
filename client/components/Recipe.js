import React from 'react';
import {connect} from 'react-redux';

const Recipe = (props) => {
  if (!props.currentSite.length) {
    return <h3>Welcome</h3>;
  } else if (!props.recipe.length) {
    return (
      <div className="container">
        <h3>
          {`Loading ingredients from ${props.currentSite.slice(0, 30)}...`}
        </h3>
        <h3>...</h3>
        <h3>...</h3>
        <h3>...</h3>
        <h3>... Sorry for the delay, we're filtering out a LOT of ads. </h3>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3>{props.currentSite}</h3>
        <ul>
          <h4>Ingredients List</h4>
        </ul>
        {props.recipe.map((ingredient, index) => {
          return (
            <li key={index} className="ingredients">
              {ingredient}
            </li>
          );
        })}
      </div>
    );
  }
};


const mapState = (state) => ({
  recipe: state.recipe,
  currentSite: state.currentSite
});

export default connect(mapState)(Recipe);
