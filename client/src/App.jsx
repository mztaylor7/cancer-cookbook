import React from 'react';

import './styles.scss';

import Search from './components/Search.jsx';
import Header from './components/Header.jsx';
import { getRecipes, getRecipeSearch } from '../services/apiService';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div className={"grid-container"}>
        <Header />
        <Search getRecipes={getRecipes} getRecipeSearch={getRecipeSearch} />
        {/* <Filter /> */}
      </div>
    )
  }
}

export default App;