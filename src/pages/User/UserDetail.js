import React from "react";

export default class UserDetail extends React.Component {
  render() {
    return <div>用户详情 [{this.props.match.params.id}]</div>;
  }
}
