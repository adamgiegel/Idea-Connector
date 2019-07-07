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
      <div className="pic" style={{backgroundImage: 'url("https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3045058-poster-p-1-4-strategies-for-introducing-new-ideas-at-work.jpg")'}}>
      <h1 className="aboutWords" onClick={this.handleNewFormClick} style={{cursor:'pointer'}}>CLICK ME</h1>
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
