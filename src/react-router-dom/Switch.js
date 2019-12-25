import React from "react";
import { pathToRegexp } from "path-to-regexp";
import { Consumer } from "./context";

export default class Switch extends React.Component {
  render() {
    const { children: SubRoutes } = this.props;
    return (
      <Consumer>
        {state => {
          const { pathname } = state.location;
          return (
            SubRoutes.find(it => {
              const { path = "", exact } = it.props;
              const reg = pathToRegexp(path, [], { end: !!exact });
              return pathname.match(reg);
            }) || null
          );
        }}
      </Consumer>
    );
  }
}
