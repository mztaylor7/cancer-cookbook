import React, { useState, useEffect } from 'react';
import '../styles.scss';

import RecipeCard from './RecipeCard.jsx';
import RecipePreview from './RecipePreview.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import Filter from './Filter.jsx';
import axios from 'axios';



const RecipesViewer = ({ getRecipes, getRecipeSearch }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecipes().then((response) => {
      if (response.data.length > 0) {
        setLoading(false);
        setRecipes(response.data);
      }
    });
  }, [])

  const handleOnInputChange = (e) => {
    setQuery(e.target.value);
  }

  let cancelToken;
  useEffect(() => {
    setLoading(true);
    if (query) {
      const searchRecipes = async () => {
        if (cancelToken) {
          cancelToken.cancel("Cancelled due to new request");
        }

        cancelToken = axios.CancelToken.source();

        try {
          const response = await axios.get(`/api/recipes/search?search=${query}`, {
            cancelToken: cancelToken.token
          });
          await setLoading(false);
          setRecipes(response.data);
        } catch(err) {
          if (axios.isCancel(err)) {
            console.log('Request Cancelled', err)
          } else {
            console.log(err)
          }
        }
      }
      searchRecipes();
      // getRecipeSearch(query)
      //   .then((response) => {
      //     if (response.data.length > 0) {
      //       setRecipes(response.data);
      //     }
      //   });
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
      return a.sortWeight - b.sortWeight
    })
    return recipes;
  }

  return (
    <React.Fragment>
      <div className={"mainGrid"}>
        <div className={"mainGridContents"}>
          <div className={"searchWrapper"}>
            <form className={"searchForm"}>
              <input className={"searchField"} type="text" value={query} id="search-input" placeholder="Search for recipes" onChange={handleOnInputChange} />
            </form>
          </div>
          <div className={"recipesWrapper"}>
            {loading ? <LoadingSpinner /> : sortRecipes().map((recipe, i) => {
              return <RecipePreview key={i} recipe={recipe} />;
            })}
          </div>
        </div>
      </div >
      <Filter />
    </React.Fragment>
  )
}

export default RecipesViewer;