import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import UserForm from './UserForm'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'

class SeeMyIdeas extends Component{


  render(){
    return(
      <Card className="App">
      <div className="pic" style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
    <div>
          <h1 className="yourIdeas">YOUR IDEAS</h1>
    {
    this.props.ideas.map(idea => {
      if(idea.user.id === this.props.currentUser.id){
        return (
          <div>
          <ul>
          <li className="ideasList" onClick={() => this.props.handleClick(idea.id)} style={{cursor:'pointer'}}>{idea.title}</li>
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
      </Card>
    )
      }
}

export default SeeMyIdeas;
