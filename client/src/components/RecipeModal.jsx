import React from 'react';
import ReactDOM from 'react-dom';

const RecipeMOdal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper">

    </div>
  </React.Fragment>
)