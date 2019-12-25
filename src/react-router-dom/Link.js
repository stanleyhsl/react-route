import React from "react";
import { Consumer } from "./context";

export default class Route extends React.Component {
  link = push => e => {
    e.preventDefault();
    e.stopPropagation();
    if (window.location.hash !== this.props.to) {
      push(this.props.to);
    }
  };
  render() {
    return (
      <Consumer>
        {state => {
          return (
            <a href="javascript;" onClick={this.link(state.history.push)}>
              {this.props.children}
            </a>
          );
        }}
      </Consumer>
    );
  }
}
