import React from "react";
import { Link, Route } from "../../react-router-dom";
import UserDetail from "./UserDetail";
import UserList from "./UserList";
import UserNew from "./UserCreate";
import './index.scss'

export default class User extends React.Component {
  render() {
    return (
      <div className="">
        <div className="col-md-2">
          <div className="nav nav-stacked">
            <li>
              <Link to="/user/new">新建用户</Link>
            </li>
            <li>
              <Link to="/user/list">用户列表</Link>
            </li>
          </div>
        </div>
        <div className="col-md-10 sub-content">
        <div className="spacor"/>
        
          <Route path="/user/detail/:id" component={UserDetail}></Route>
          <Route path="/user/list" component={UserList}></Route>
          <Route path="/user/new" component={UserNew}></Route>
        </div>
      </div>
    );
  }
}
