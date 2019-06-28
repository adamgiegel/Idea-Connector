import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
import { Card, Button, Row, Col } from 'react-materialize'

class About extends Component {

render() {
  return (
      <div>
        <div className="pic" style={{backgroundImage: 'url("https://seanwes.com/wp-content/uploads/2016/02/242-sp-find-your-why.png")'}}>
        <h1>Some about me stuff....Im not sure what will go here yet</h1>
        </div>
      </div>
    );
  }
}

export default About;
