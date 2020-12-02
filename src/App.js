// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import Recipe from "./components/Recipe";
// // import Nav from "./components/nav";
// import style from "./components/css/App.module.css";
// import vectorlogo from "./assets/vector.svg";
// import Alert from "./components/Alert";
// import nav from "./components/css/Nav.css";
// // import Home from "./components/nav/Home";
// import About from "./components/nav/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// // Main
// const App = () => {
//   const APP_ID = "e40ade4a";
//   const APP_KEY = "4df3b4a744cab600ecf6eec0ccbdb5b5";

//   const [recipes, setRecipes] = useState([]);
//   const [query, setQuery] = useState("");
//   const [alert, setAlert] = useState("");

//   // Fetch data from API
//   const getRecipes = async () => {
//     // If user search is null
//     if (query !== "") {
//       const response = await fetch(
//         `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//       );
//       const data = await response.json();

//       // If user search is invalid
//       if (!data.more) {
//         setAlert("Invalid Recipe. Please Try Again...");
//         setQuery("");
//       } else {
//         setRecipes(data.hits);
//         console.log(data.more);
//         setAlert("");
//         setQuery("");
//       }
//     } else {
//       setAlert("Please Search for a Recipe...");
//     }
//   };

//   // Update Search Value
//   const onChange = evt => {
//     setQuery(evt.target.value);
//   };

//   // Remove vector art after search
//   const setVector = () => {
//     document.getElementById("vector").style.visibility = "hidden";
//     document.getElementById("vector").style.width = "0";
//   };

//   //  Get Search
//   const onSubmit = e => {
//     e.preventDefault();
//     getRecipes();
//     setVector();
//   };

//   const openNav = () => {
//     document.getElementById("Sidepanel").style.width = "50%";
//   };

//   const closeNav = () => {
//     document.getElementById("Sidepanel").style.width = "0";
//   };

//   // Display Form
//   return (
//     <Router>
//       <div className={style.App}>
//         <div className={style.logo}>Cookeez</div>
//         {/* <Nav /> */}
//         <Switch>
//           <Route path="/About" component={About} />
//           {/* <Route path="/" component={Home} /> */}
//         </Switch>

//         {/* Navigation */}
//         <div className="ham">
//           <div className="nav">
//             <div id="Sidepanel" className="sidebar">
//               <i className="fas fa-times" id="closebtn" onClick={closeNav}></i>
//               <ul>
//                 <li>
//                   <Link className="active" to="/">
//                     Home
//                   </Link>
//                   <Link className="inactive" to="/About">
//                     About
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="navmain">
//             <i
//               id="openbtn"
//               className="fas fa-hamburger fa-2x"
//               onClick={openNav}
//             ></i>
//           </div>
//         </div>

//         {/* Search Form  */}
//         <form onSubmit={onSubmit} action="" className={style.searchform}>
//           <input
//             type="text"
//             className={style.searchbar}
//             onChange={onChange}
//             value={query}
//             placeholder="Search Recipe..."
//           />
//           <input className={style.searchbutton} type="submit" value="Search" />
//         </form>

//         {/* Alert Message  */}
//         {alert !== "" && <Alert alert={alert} />}

//         {/* Extract data from API */}
//         <div className={style.recipe}>
//           {recipes.map(recipe => (
//             <Recipe
//               key={uuidv4()}
//               title={recipe.recipe.label}
//               image={recipe.recipe.image}
//               diet={recipe.recipe.dietLabels}
//               calories={recipe.recipe.calories}
//               serve={recipe.recipe.yield}
//               url={recipe.recipe.url}
//               ingredients={recipe.recipe.ingredients}
//             />
//           ))}
//         </div>

//         {/* Vector Art  */}
//         <div className={style.vector} id="vector">
//           <img src={vectorlogo} alt="vector" />
//         </div>

//         {/* Copyright  */}
//         <footer>
//           <p> &#169; Copyright 2020 ChiragChrg </p>
//         </footer>
//       </div>
//     </Router>
//   );
// // };

// export default App;

import React from "react";
import Home from "./components/nav/Home";
import About from "./components/nav/About";
import "./components/css/Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const openNav = () => {
    document.getElementById("Sidepanel").style.width = "50%";
  };

  const closeNav = () => {
    document.getElementById("Sidepanel").style.width = "0";
  };

  // const activehom = () => {
  //   document.querySelector("#link").classList.toggle("active");
  // };

  // const active = () => {
  //   document.querySelector(".linka").classList.toggle("active");
  // };

  return (
    <Router>
      {/* Navigation */}
      <div className="ham">
        <div className="nav">
          <div id="Sidepanel" className="sidebar">
            <i className="fas fa-times" id="closebtn" onClick={closeNav}></i>
            <ul>
              <li>
                <Link id="link" to="/">
                  Home
                </Link>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navmain">
          <i
            id="openbtn"
            className="fas fa-hamburger fa-2x"
            onClick={openNav}
          ></i>
        </div>
      </div>

      <Switch>
        <Route id="about" path="/About" component={About} />
        <Route id="home" path="/" exact component={Home} />
      </Switch>

      {/* <Home /> */}
    </Router>
  );
}

export default App;
