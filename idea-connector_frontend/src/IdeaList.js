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

class IdeaList extends Component {



  render() {
    return (
      <div>
      {
        this.props.ideas.map(idea => {
          if(!this.props.ideaClick)
          return <div class="card-panel hoverable" onClick={() => this.props.foundIdea(idea.id)}><p className="ideaCard">{idea.title}</p></div>
      })
      }
      </div>
    )
  }
}

export default IdeaList;
