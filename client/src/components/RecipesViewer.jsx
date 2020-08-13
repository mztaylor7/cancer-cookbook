import React, { useState } from 'react';
import '../styles.scss';

import RecipeCard from './RecipeCard.jsx';
import RecipePreview from './RecipePreview.jsx';

const RecipesViewer = ({ recipes, query }) => {
  // const [recipes, setRecipes] = useState([]);

  const sortRecipes = () => {
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].title.indexOf(query) !== -1) {
        recipes[i].sortWeight = 1;
      } else if (recipes[i].dishType.indexOf(query) !== -1) {
        recipes[i].sortWeight = 2;
      } else {
        recipes[i].sortWeight = 3;
      }
    }
    recipes.sort((a, b) => {
      return a.sortWeight-b.sortWeight
    })
    return recipes;
  }

  return (
    <div className={"mainGrid"}>
      {sortRecipes().map((recipe, i) => {
        // return <RecipeCard key={i} recipe={recipe} />;
        return <RecipePreview key={i} recipe={recipe} />;
      })}
    </div >
  )
}

export default RecipesViewer;