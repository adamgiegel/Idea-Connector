import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Button, Icon, Label } from 'semantic-ui-react'
import UserForm from './UserForm';
import IdeaDisplay from './IdeaDisplay'
import SeeMyIdeas from './SeeMyIdeas';
import SelectedIdea from './SelectedIdea';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
// import { Card, Button, Row, Col } from 'react-materialize'



class SeeIdeas extends Component {


  state = {
    clicked: true,
    findIdea: '',
    selected: true,
    backgroundImage: 'url("http://www.laofac.com/wp-content/uploads/idea.jpg")'
  }

  handleYourIdeaBack = () => {
    this.setState({
      selected: !this.state.selected
    })
  }

  handleSelectedClick = () => {
    this.setState({
      selected: !this.state.selected
    })
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

  render(){
    return (
<div>
<div>
<Card className='likedIdeas' style={{backgroundImage: this.state.backgroundImage}}>
<h4 className='likedIdeasText'>COMPANIES THAT LIKE ONE OF YOUR IDEAS</h4>
<h3 className='likedIdeasText'>Apple</h3>
<h3 className='likedIdeasText'>Miller Lite</h3>
</Card>
</div>
{this.state.selected ?
<div>
<Card className="idea2" onClick={this.handleSelectedClick}
image="https://media.giphy.com/media/xTkcEEFmqMosEnKtzi/giphy.gif"
description="GO TO MY IDEAS."
/>
</div>
:
<div>
<SeeMyIdeas
otherIdeas={this.props.ideas}
currentUser={this.props.currentUser}
handleClick={this.handleClick}
foundIdea={this.props.foundIdea}
addNewIdea={this.props.addNewIdea}
deleteIdea={this.props.deleteIdea}
ideas={this.props.ideas}
selected={this.state.selected}
handleYourIdeaBack={this.handleYourIdeaBack}
/>
</div>
}
{!this.state.clicked ?
  <SelectedIdea
  findIdea={this.state.findIdea}
  goBack={this.goBack}
  deleteIdea={this.props.deleteIdea}
  ideas={this.props.ideas}
  currentUser={this.props.currentUser}/>
: null}
</div>
)
}
}

export default SeeIdeas;
