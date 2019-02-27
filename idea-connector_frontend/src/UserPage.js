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
  findIdea: '',
  selected: true,
  chosen: true
}


handleClick = (id) => {
  const findIdea = this.props.currentUser.ideas.find(idea => {
    return idea.id === id
  })
  this.setState({
    findIdea: findIdea,
    clicked: !this.state.clicked,
  })
}

goBack = () => {
  this.setState({
    clicked: !this.state.clicked
  })
}

handleFormBack = () => {
  this.setState({
    chosen: !this.state.chosen
  })
}

handleNewFormClick = () => {
  this.setState({
    chosen: !this.state.chosen
  })
}

handleSelectedClick = () => {
  this.setState({
    selected: !this.state.selected
  })
}

handleYourIdeaBack = () => {
  this.setState({
    selected: !this.state.selected
  })
}



  render() {
    return (
      <div>
      <div>
      {this.state.chosen ?
      <div>
      <Card onClick={this.handleNewFormClick}
      image='https://media.giphy.com/media/tJdCvTmdJdhQSf4tGj/giphy.gif'
      description="HAVE AN IDEA?"
      />
      </div>
      : <UserForm handleFormBack={this.handleFormBack} />}
      </div>
      <div>
      {this.state.selected ?
      <div>
      <Card className="needIdea" onClick={this.handleSelectedClick}
      image="https://media.giphy.com/media/xTkcEEFmqMosEnKtzi/giphy.gif"
      description="GO TO MY IDEAS."
      />
      </div>
    :
    this.props.currentUser.ideas.map(idea => {
      if(this.state.clicked){
      return <p onClick={() => this.handleClick(idea.id)}>{idea.title}</p>
    }
  })
}
    {!this.state.clicked ?
            <div>
            <iframe src={this.state.findIdea.video}/>
            <p>{this.state.findIdea.description}</p>
            <button onClick={this.goBack}>GO BACK</button>
            </div> : null}
    <div>
    {!this.state.selected ?
    <button class='ui button' onClick={this.handleYourIdeaBack}>I'M DONE, THANKS</button> : null
  }
    </div>
    </div>
    </div>
    );
  }
}




export default UserPage;
