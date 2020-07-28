import React, { useState } from 'react';
import '../styles.scss';

import RecipeCard from './RecipeCard.jsx';

const RecipesViewer = ({ recipes }) => {
  // const [recipes, setRecipes] = useState([]);


  return (
    <div className={"mainGrid"}>
      {recipes.map((recipe, i) => {
        return <RecipeCard key={i} recipe={recipe} />;
      })}
    </div >
  )
}

export default RecipesViewer;