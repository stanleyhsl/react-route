import React from "react";
import { Provider } from "./context";

export default class HashRouter extends React.Component {
  state = {
    location: { pathname: window.location.hash.slice(1) || "/" }
  };
  componentDidMount() {
    window.location.hash = window.location.hash || "/";
    window.addEventListener("hashchange", () => {
      const pathname = window.location.hash.slice(1) || "/";
      console.log("hash change:", pathname);
      this.setState({
        ...this.state.location,
        location: { pathname }
      });
    });
  }
  render() {
    const value = {
      location: this.state.location,
      history: {
        push(to) {
          window.location.hash = to;
        }
      }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
