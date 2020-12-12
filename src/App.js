import React, { useState } from "react";
import Home from "./components/nav/Home";
import About from "./components/nav/About";
import "./components/css/Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const openNav = () => {
    document.getElementById("Sidepanel").style.width = "50%";
  };

  const closeNav = () => {
    if (window.innerWidth <= 395) {
      document.getElementById("Sidepanel").style.width = "0";
    }
  };

  const [aone, setAone] = useState(true);
  const [atwo, setAtwo] = useState(false);

  const navAone = () => {
    setAone(true);
    setAtwo(false);
    closeNav();
  };

  const navAtwo = () => {
    setAtwo(true);
    setAone(false);
    closeNav();
  };

  return (
    <Router>
      {/* Navigation */}
      <div className="ham">
        <div className="nav">
          <div id="Sidepanel" className="sidebar">
            <i className="fas fa-times" id="closebtn" onClick={closeNav}></i>
            <ul>
              <li>
                <Link
                  onClick={navAone}
                  className={`${aone ? "active" : "inactive"}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  onClick={navAtwo}
                  className={`${atwo ? "active" : "inactive"}`}
                  to="/about"
                >
                  About
                </Link>
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
        <Route id="about" path="/about" exact component={About} />
        <Route id="home" path="/" exact component={Home} />
      </Switch>

      {/* <Home /> */}
    </Router>
  );
}

export default App;
