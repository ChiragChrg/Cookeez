import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './Recipe';
import './App.css';

// Main
const App = () => {
  const APP_ID = "e40ade4a";
  const APP_KEY = "4df3b4a744cab600ecf6eec0ccbdb5b5";

  const [recipes , setRecipes] = useState([]);
  const [search , setSearch] = useState("");
  const [query , setQuery] = useState("");

  // ONload fetch using useEffect
  // useEffect( () => {
    // Changed to Fetch on Search...
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    // getRecipes()
  // }, [query]);

  // Update Search Value
  const updateSearch = evt => {
    setSearch(evt.target.value);
  }

  // Search Recipe and sending value to setQuery
  const getSearch = evt => {
    evt.preventDefault();
    setQuery(search);
    setSearch('');
    getRecipes()
  }

  // Display Form
  return(
    <div className="App">
    <div className="logo">Cookeez</div>

      <form onSubmit={getSearch} action="" className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Search Recipe..."/>
        <button className="search-button" type='submit'>Search</button>
      </form>

      {/* Extract data from API */}
      {recipes.map(recipe => (
        <Recipe 
          key={uuidv4()}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          diet={recipe.recipe.dietLabels}
          calories={recipe.recipe.calories}
          serve={recipe.recipe.yield}
          url={recipe.recipe.url}
          ingredients={recipe.recipe.ingredients}
        />
      ))}

    </div>
  );
};


export default App;
