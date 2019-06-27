import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
import { Card, Button, Row, Col } from 'react-materialize'

class About extends Component {

render() {
  return (
      <div>
        <div className="pic" style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
        <h1>Some about me stuff....Im not sure what will go here yet</h1>
        </div>
      </div>
    );
  }
}

export default About;
