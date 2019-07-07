import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
import { Card, Button, Row, Col } from 'react-materialize'

class About extends Component {

render() {
  return (
        <div className="pic2" style={{backgroundImage: 'url("https://seanwes.com/wp-content/uploads/2016/02/242-sp-find-your-why.png")'}}>
        <br></br>
        <br></br>
        <h1 className="carouselIdea3">Annually, over $500 billion is spent on advertising globally.</h1>
        <h1 className="carouselIdea3">That is a lot of money.  Maybe you can have some of that.</h1>
        <h1 className="carouselIdea3">If you are an independent artist, whether that be a musician, videographer, singer, photographer, or heck even a regular human who just has a great idea, you might think you have a good idea for an advertisement.</h1>
        <h1 className="carouselIdea3">But how in the heck do you get your idea to the people that need it, and then how do you get paid for it?</h1>
        <h1 className="carouselIdea3">Idea Connector connects independent artists and creative humans to companies that need some fresh advertising ideas.</h1>
        <h1 className="carouselIdea3">All you do is submit your idea and a company will tell you if they like it and submit an offer.</h1>
        <h1 className="carouselIdea3">You can accept the offer or negotiate for a bigger payday.</h1>
        <h1 className="carouselIdea3">But we also help companies find some fresh ideas.</h1>
        <h1 className="carouselIdea3">Maybe you think you have ran out of ideas or you just dont have time to make a catching ad.</h1>
        <h1 className="carouselIdea3">Check our database of ideas and make an offer.</h1>
        </div>
    );
  }
}

export default About;
