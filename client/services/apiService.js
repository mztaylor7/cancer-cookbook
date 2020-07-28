import axios from 'axios';

export const getRecipes = () => {
  return axios.get('/api/recipes')
}

export const getRecipeSearch = (term) => {
  return axios.get('/api/recipes/search', {
    params: {search: term}
  })
}