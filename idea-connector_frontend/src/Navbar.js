import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {

  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">Hello, {this.props.currentUser.name}!</a>
        <a onClick={this.props.handleLogout} href='#logout'>Logout</a>
      </div>
    );
  }
  }

export default Navbar;
