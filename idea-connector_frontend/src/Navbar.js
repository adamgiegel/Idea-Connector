import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {

  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">Hello, {this.props.currentUser.name}!</a>
        <div onClick={this.props.handleClick}>
        {this.props.clicked ? <a href='#login'>Login</a> : <a href='#login'>Logout</a>}
        </div>
      </div>
    );
  }
}

export default Navbar;
