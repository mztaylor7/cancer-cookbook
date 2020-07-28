import React, { useState } from 'react';
import '../styles.scss';
import styled from 'styled-components';


const RecipeCard = (props) => {
  const { recipe } = props;

  const symptomParse = () => {
    var symptomArray = recipe.symptoms.split(' ');

  }

  return (
    <Container>
      <h2>{recipe.title}</h2>
      <label>Description</label>
      <p>{recipe.description}</p>
      <label>Ingredients</label>
      {recipe.ingredients.split('\n\n').map((ingredient, i) => {
        return <li key={i}>{ingredient}</li>;
      })}
      <br/>
      <label>Directions</label>
      <p>{recipe.directions}</p>
      <label>Tip</label>
      <p>{recipe.tip || `No tips at the moment`}</p>
      <div>
        <label>Nutritional Information</label>
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
    </Container>
  )
}

const Container = styled.div`
  border: 3px solid;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  position: static;
`

export default RecipeCard;