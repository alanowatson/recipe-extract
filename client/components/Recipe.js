import React from 'react';
import {connect} from 'react-redux';
import ReactLoading from 'react-loading';

const Recipe = (props) => {
  if (!props.currentSite.length) {
    return <h3>Welcome</h3>;
  } else if (!props.recipe.length) {
    return (
      <div className="container">
        <h3>
          {`Loading ingredients from ${props.currentSite.slice(0, 30)}...`}
        </h3>
        <ReactLoading
          className="loading"
          type="spin"
          color="fff"
          height={200}
          width={200}
        />
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
