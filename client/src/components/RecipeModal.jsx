import React from 'react';
import ReactDOM from 'react-dom';

const RecipeModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" onClick={hide}>
            <span>X</span>
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default RecipeModal;