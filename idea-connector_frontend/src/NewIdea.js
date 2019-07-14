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
      <div className="pic" onClick={this.handleNewFormClick} style={{cursor:'pointer', backgroundImage: 'url("https://inventhelp.com/images/banners/New_Invention_Ideas_George-Foreman-2.png")'}}>
      </div>
      :
      <div className="form">
      <UserForm
      currentUser={this.props.currentUser}
      handleFormBack={this.handleFormBack}
      addNewIdea={this.props.addNewIdea}/>
      </div>
      }
      </div>
    )
  }
}

export default NewIdea;
