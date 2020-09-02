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
        <div className="recipe-card">
          <h2>{recipe.title}</h2>
          <label>Symptoms:</label>
          {symptomParse().map((symptom, i) => {
            return <li key={i}>{symptom} </li>
          })}
          <br/>
          <label>Description:</label>
          <p>{recipe.description}</p>
          <label>Ingredients:</label>
          {recipe.ingredients.split('\n\n').map((ingredient, i) => {
            return <li key={i}>{ingredient}</li>;
          })}
          <br/>
          <label>Directions:</label>
          <p>{recipe.directions}</p>
          <label>Tip:</label>
          <p>{recipe.tip || `No tips at the moment`}</p>
          <div>
            <label>Nutritional Information:</label>
            <hr/>
            <li>Calories: {recipe.nutrition[0].calories}</li>
            <li>Fat: {recipe.nutrition[0].fat}</li>
            <li>Saturated Fat: {recipe.nutrition[0].saturatedFat}</li>
            <li>Cholesterol: {recipe.nutrition[0].cholesterol}</li>
            <li>Sodium: {recipe.nutrition[0].sodium}</li>
            <li>Carbohydrates: {recipe.nutrition[0].carbohydrate}</li>
            <li>Dietary Fiber: {recipe.nutrition[0].dietaryFiber}</li>
            <li>Sugars: {recipe.nutrition[0].sugars}</li>
            <li>Protein: {recipe.nutrition[0].protein}</li>
            <li>Calcium: {recipe.nutrition[0].calcium}</li>
            <li>Potassium: {recipe.nutrition[0].potassium}</li>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default RecipeModal;