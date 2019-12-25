import React from "react";
import Home from "./pages/Home";
import User from "./pages/User";
import Shop from "./pages/Shop";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "./react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-heading">
            <div className="navbar-brand">ROUTER</div>
          </div>
          <div className="nav navbar-nav">
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/user">用户</Link>
            </li>
            <li>
              <Link to="/shop">商家中心</Link>
            </li>
          </div>
        </div>
      </div>
      <div className="container">
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/shop" component={Shop} exact></Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
