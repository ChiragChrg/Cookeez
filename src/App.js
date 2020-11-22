import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './Recipe';
import './App.css';

// Main
const App = () => {
  const APP_ID = "e40ade4a";
  const APP_KEY = "4df3b4a744cab600ecf6eec0ccbdb5b5";

  const [recipes , setRecipes] = useState([]);
  const [query , setQuery] = useState("");

  // Fetch data from API
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
    setQuery("");
  };

  // Update Search Value
  const onChange = evt => {
    setQuery(evt.target.value);
  }

  // Get Search 
  const onSubmit = e => {
    e.preventDefault();
    getRecipes();
  }

  // Display Form
  return(
    <div className="App">
    <div className="logo">Cookeez</div>

      <form onSubmit={onSubmit} action="" className="search-form">
        <input type="text" className="search-bar" onChange={onChange} value={query} placeholder="Search Recipe..."/>
        <input className="search-button" type='submit' value="search"/>
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
