import React from "react";
import { pathToRegexp } from "path-to-regexp";
import { Consumer } from "./context";

export default class Route extends React.Component {
  render() {
    const { path, component: Component, exact } = this.props;
    return (
      <Consumer>
        {state => {
          const { pathname } = state.location;
          const keys = [];
          const reg = pathToRegexp(path, keys, { end: !!exact });
          const ret = pathname.match(reg);
          const [, ...vals] = ret || [];
          const params = keys.reduce((last, curr, idx) => {
            last[curr.name] = vals[idx];
            return last;
          }, {});
          const props = {
            ...state,
            match: { params }
          };

          if (typeof Component !== "function") {
            throw new Error("路由component的值错误");
          }
          return ret ? <Component {...props} /> : null;
        }}
      </Consumer>
    );
  }
}
