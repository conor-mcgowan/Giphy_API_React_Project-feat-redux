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
        <nav>
          <NavLink to="/login" activeClassName="active-link">
            Login
          </NavLink>
          <NavLink to="/search" activeClassName="active-link">
            Search
          </NavLink>
          <NavLink to="/favorites" activeClassName="active-link">
            Favorites
          </NavLink>
        </nav>
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
        <footer>This is a footer</footer>
      </Router>
    </>
  );
}

export default App;
