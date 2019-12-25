import React from "react";
import { Link } from "../../react-router-dom";

export default function UserList() {
  return (
    <ul>
      <li>
        <Link to="/user/detail/1">第一个用户</Link>
      </li>
      <li>
        <Link to="/user/detail/2">第二个用户</Link>
      </li>
      <li>
        <Link to="/user/detail/3">第三个用户</Link>
      </li>
      <li>
        <Link to="/user/detail/4">第四个用户</Link>
      </li>
    </ul>
  );
}
