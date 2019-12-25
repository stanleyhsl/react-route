import React from "react";
import { Consumer } from "./context";

export default class Redirect extends React.Component {
 
  render() {
    return (
      <Consumer>
        {state => {
          state.history.push(this.props.to);
          return null;
        }}
      </Consumer>
    );
  }
}
