import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import UserForm from './UserForm'


class IdeaDisplay extends Component {
  render(){
  return (
    <div>
    <div>
    {
      this.props.foundIdea.map(user => {
          return (
            <div key={user.id}>
            <h1>{user.title}</h1>
            <iframe height="300" width="540" src={user.video}/>
            <h4>{user.description}</h4>
          </div>
        )
    })
  }
  </div>
  </div>
)
}
}



export default IdeaDisplay;
