import React from "react";
import Home from "./pages/Home";
import User from "./pages/User";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} exact></Route>
          <Route path="/user" component={User} exact></Route>
          <Redirect to="/home"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
