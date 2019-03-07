import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import { Card, Icon } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';
import IdeaDisplay from './IdeaDisplay'
import SearchForm from './SearchForm'
import EditCompanyForm from './EditCompanyForm'
import ButtonExampleLabeled from './LikeButton'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'

class SearcedIdeas extends Component {



  render() {
    return (
      this.props.findIdea.map(idea => {
        return <div>
        <Card>
        <ButtonExampleLabeled
        {...idea}
        otherIdeas={this.props.ideas}
        someLikes={this.props.someLikes}
        likedIdea={this.props.likedIdea}
        likeIdea={this.props.likeIdea}
        updateIdeas={this.props.updateIdeas}/>
              <div>
              <iframe height="300px" width="500px" src={idea.video}/>
              <Card>
              <p className="description">{idea.description}</p>
              </Card>
              <button onClick={this.props.goBack} class='ui button'>GO BACK</button>
              </div> </Card>
        </div>
      })
    );
  }
}

export default SearcedIdeas;
