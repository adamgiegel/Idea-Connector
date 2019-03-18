import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import UserForm from './UserForm'

class NewIdea extends Component{


  state = {
    chosen: true
  }

  handleNewFormClick = () => {
    this.setState({
      chosen: !this.state.chosen,
    })
  }

  handleFormBack = () => {
    this.setState({
      chosen: !this.state.chosen
    })
  }

  render(){
    return(
      <div>
      {this.state.chosen ?
      <div>
      <Card className="idea1" onClick={this.handleNewFormClick}
      image='https://media.giphy.com/media/tJdCvTmdJdhQSf4tGj/giphy.gif'
      description="HAVE AN IDEA?"
      />
      </div>
      : <UserForm className="userForm"
      currentUser={this.props.currentUser}
      handleFormBack={this.handleFormBack}
      addNewIdea={this.props.addNewIdea}/>}
      </div>
    )
  }
}

export default NewIdea;
