import React, { useState } from 'react';
import '../styles.scss';

import RecipeCard from './RecipeCard.jsx';
import RecipePreview from './RecipePreview.jsx';
import Sort from './Sort.jsx';

const RecipesViewer = ({ getRecipes, getRecipeSearch }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  React.useEffect(() => {
    getRecipes().then((response) => {
      if (response.data.length > 0) {
        setRecipes(response.data);
      }
    });
  }, [])

  const handleOnInputChange = (e) => {
    setQuery(e.target.value);
  }
  React.useEffect(() => {
    if (query) {
      getRecipeSearch(query)
        .then((response) => {
          if (response.data.length > 0) {
            setRecipes(response.data);
          }
        });
    }
  }, [query])

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
    <React.Fragment>
      <div className={"mainGrid"}>
        <div className={"searchWrapper"}>
          <form className={"searchForm"}>
            <input className={"searchField"} type="text" value={query} id="search-input" placeholder="Search for recipes" onChange={handleOnInputChange} />
          </form>
        </div>
        <div className={"recipesWrapper"}>
          {sortRecipes().map((recipe, i) => {
            return <RecipePreview key={i} recipe={recipe} />;
          })}
        </div>
      </div >
      <Sort />
    </React.Fragment>
  )
}

export default RecipesViewer;