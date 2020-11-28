import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './components/Recipe';
import Nav from './components/nav';
import style from './components/css/App.module.css';
import vectorlogo from './assets/vector.svg';

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

  const setVector = () => {
    document.getElementById("vector").style.visibility = 'hidden';
    document.getElementById("vector").style.width = '0';
  }

  // Get Search 
  const onSubmit = e => {
    e.preventDefault();
    getRecipes();
    setVector();
  }

  // Display Form
  return(
    <div className={style.App}>
      <div className={style.logo}>Cookeez</div>
      <Nav/>

      <form onSubmit={onSubmit} action="" className={style.searchform}>
        <input type="text" className={style.searchbar} onChange={onChange} value={query} placeholder="Search Recipe..."/>
        <input className={style.searchbutton} type='submit' value="search"/>
      </form>

      <div className={style.vector} id="vector">
        <img src={vectorlogo} alt="vector"/>
      </div>

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
