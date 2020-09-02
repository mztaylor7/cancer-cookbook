import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.scss';
import RecipeCard from './RecipeCard.jsx';

const RecipeModal = ({recipe, isShowing, hide}) => {

  return (isShowing ? (
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" onClick={hide}>
              <span>X</span>
            </button>
          </div>
          <RecipeCard recipe={recipe}/>
        </div>
      </div>
    </React.Fragment>
  ) : null)
}

export default RecipeModal;