import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import UserForm from './UserForm'
import IdeaDisplay from './IdeaDisplay'

class UserPage extends Component {

state = {
  clicked: true,
  findIdea: ''
}


handleClick = (id) => {
  const findIdea = this.props.currentUser.ideas.find(idea =>{
    return idea.id === id
  })
  this.setState({
    findIdea: findIdea,
    clicked: !this.state.clicked
  })
}

goBack = () => {
  this.setState({
    clicked: !this.state.clicked
  })
}


  render() {
    return (
      <div className="App">
      <div>
      {
        this.state.clicked ?
        this.props.currentUser.ideas.map(idea => {
          return (
            <p onClick={() => this.handleClick(idea.id)}>{idea.title}</p>
          )}) :
              <div>
              <iframe src={this.state.findIdea.video}/>
              <p>{this.state.findIdea.description}</p>
              <button onClick={this.goBack}>GO BACK</button>
              </div>
      }
      </div>
      <div>
      <Card
      image='https://media.giphy.com/media/tJdCvTmdJdhQSf4tGj/giphy.gif'
      description="HAVE AND IDEA?"
      />
      </div>
      <div>
      <Card
      image="https://media.giphy.com/media/xTkcEEFmqMosEnKtzi/giphy.gif"
      description="GO TO MY IDEAS."
      />
      </div>
    </div>
    );
  }
}




export default UserPage;
