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
        <h1 className="carouselIdea3">That is a lot of money.  Maybe you can have some of that.</h1>
        <h1 className="carouselIdea3">If you are an independent artist, whether that be a musician, videographer, singer, photographer, or heck even a regular human who just has a great idea, you might think you have a good idea for an advertisement.</h1>
        <h1 className="carouselIdea3">But how in the heck do you get your idea to the people that need it, and then how do you get paid for it?</h1>
        </div>
        <div className="aboutIdeas">
        <h1 className="aboutIdeasFont">Idea Connector connects independent artists and creative humans to companies that need some fresh advertising ideas.</h1>
        <h1 className="aboutIdeasFont">All you do is submit your idea and a company will tell you if they like it and submit an offer.</h1>
        <h1 className="aboutIdeasFont">You can accept the offer or negotiate for a bigger payday.</h1>
        <h1 className="aboutIdeasFont">But we also help companies find some fresh ideas.</h1>
        <h1 className="aboutIdeasFont">Maybe you think you have ran out of ideas or you just dont have time to make a catching ad.</h1>
        <h1 className="aboutIdeasFont">Check our database of ideas and make an offer.</h1>
        </div>
        </div>
        </div>
    );
  }
}

export default About;
