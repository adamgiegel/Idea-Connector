import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
import { Card, Button, Row, Col } from 'react-materialize'

class About extends Component {

render() {
  return (
        <div>
        <div className="pic2" style={{backgroundImage: 'url("https://seanwes.com/wp-content/uploads/2016/02/242-sp-find-your-why.png")'}}>
        <br></br>
        <br></br>
        </div>
        <div>
        <div className="aboutMoneyDiv">
        <h1 className="aboutMoney">Annually, over $500 billion is spent on advertising globally.</h1>
        <p className="aboutMoneyP">That is a lot of money.  Maybe you can have some of that. If you are an independent artist, whether that be a musician, videographer, singer, photographer, or heck even a regular human who just has a great idea, you might think you have a good idea for an advertisement.
        But how in the heck do you get your idea to the people that need it, and then how do you get paid for it?</p>
        </div>
        <div className="pic2" style={{backgroundImage: 'url("http://theinspirationroom.com/daily/print/2008/12/polident_apple.jpg")'}}>
        </div>
        <div className="aboutMoneyDiv">
        <h1 className="aboutMoney">What we do</h1>
        <p className="aboutMoneyP">Idea Connector connects independent artists and creative humans to companies that need some fresh advertising ideas.
        All you do is submit your idea and a company will tell you if they like it and submit an offer.
        You can accept the offer or negotiate for a bigger payday.
        But we also help companies find some fresh ideas.
        Maybe you think you have ran out of ideas or you just dont have time to make a catching ad.
        Check our database of ideas and make an offer.</p>
        </div>
        </div>
        </div>
    );
  }
}

export default About;
