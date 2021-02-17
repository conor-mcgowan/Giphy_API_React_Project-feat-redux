import "./App.css";
import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  NavLink,
} from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SearchPage from "./components/Search/SearchPage";
import FavoritesPage from "./components/Favorites/FavoritesPage";

function App() {
  return (
    <>
      <Router>
        <header>
          <nav className="nav-bar">
            <NavLink
              to="/login"
              className="nav-link text-center"
              activeClassName="active-link"
            >
              Login
            </NavLink>
            <NavLink
              to="/search"
              className="nav-link text-center"
              activeClassName="active-link"
            >
              Search
            </NavLink>
            <NavLink
              to="/favorites"
              className="nav-link text-center"
              activeClassName="active-link"
            >
              Favorites
            </NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/favorites" component={FavoritesPage} />
            <Route path="*">
              <Redirect to="/search" />
            </Route>
          </Switch>
        </main>
        <br />
        <footer>This is a footer</footer>
      </Router>
    </>
  );
}

export default App;
