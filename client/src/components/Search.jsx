import React, { useState } from 'react';
import '../styles.scss';

import RecipesViewer from './RecipesViewer.jsx';
import Sort from './Sort.jsx';

const Search = ({ getRecipes, getRecipeSearch }) => {
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

    // Want to get rid of searchGrid and just add the search bar to mainGrid

  return (
    <React.Fragment>
      <div className={"searchGrid"}>
        <form className={"searchForm"}>
          <input className={"searchField"} type="text" value={query} id="search-input" placeholder="Search for recipes" onChange={handleOnInputChange} />
        </form>
      </div>
      <RecipesViewer query={query} recipes={recipes} />
      <Sort />
    </React.Fragment>
  )
}

export default Search;