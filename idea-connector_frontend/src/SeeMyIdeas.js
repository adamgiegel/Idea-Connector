import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import UserForm from './UserForm'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'

class SeeMyIdeas extends Component{

  state = {
    backgroundImage: 'url("https://media.giphy.com/media/xTkcEEFmqMosEnKtzi/giphy.gif")'
  }

  render(){
    return(
      <Card className="myIdeasCard">
      <div style={{backgroundImage: this.state.backgroundImage}} class="row">
  <div class="col s12 m6">
    <div>
          <h1 className="yourIdeas">YOUR IDEAS</h1>
    {
    this.props.ideas.map(idea => {
      if(idea.user.id === this.props.currentUser.id){
        return (
          <div>
          <ul>
          <li className="ideasList" onClick={() => this.props.handleClick(idea.id)}>{idea.title}</li>
          </ul>
          </div>
        )
      }
    })
  }
  <div>
  {!this.props.selected ?
  <button class='ui button inverted basic button' onClick={this.props.handleYourIdeaBack}>I'M DONE, THANKS</button> : null
  }
  </div>
    </div>
  </div>
</div>
      </Card>
    )
      }
}

export default SeeMyIdeas;
