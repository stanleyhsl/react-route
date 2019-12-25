import React from "react";

export default class UserCreate extends React.Component {
  onsumbit = e => {
    e.preventDefault();
    // e.stopPropagation();
    console.log('xxx',this.username.current.value);
    this.props.history.push('/user/detail/1')
  };
  username = React.createRef();

  render() {
    return (
      <div className="">
        <h3>新建用户</h3>
        <form onSubmit={this.onsumbit}>
          <input type="text" ref={this.username}/>
          <button type="submit" >提交</button>
        </form>
      </div>
    );
  }
}
