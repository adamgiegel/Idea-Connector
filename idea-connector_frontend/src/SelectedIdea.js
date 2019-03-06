import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Label, Button } from 'semantic-ui-react'
import UserForm from './UserForm'
import IdeaDisplay from './IdeaDisplay'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Row, Col } from 'react-materialize'

class SelectedIdea extends Component{

  state = {
    backgroundImage: 'url("https://www.appsterhq.com/wp-content/uploads/2017/10/idea.jpg")'
  }

  render(){
    return(
      <Card className="myIdeasCard2">
      <Button as='div' labelPosition='right'>
        <Button icon>
          <Icon name='heart' />
          Likes
        </Button>
        <Label s='a' basic pointing='left'>
          {this.props.findIdea.likes}
        </Label>
      </Button>
      <div>
      <iframe height="300px" width="500px" src={this.props.findIdea.video}/>
      <Card>
      <Card>
      <p className='description'>{this.props.findIdea.description}</p>
      </Card>
      <Card>
      {
      this.props.ideas.map(idea => {
        if(idea.user.id === this.props.findIdea.id){
          return (
            <div>
            {idea.offers.map(offer => {
              return <div>
              <p>OFFER AMOUNT: ${offer.amount}</p><p>ACCEPTED: {offer.accepted}</p><p>REJECTED: {offer.rejected}</p>
              </div>
            })}
            </div>
          )
        }
      })
    }
  {
      this.props.ideas.map(idea => {
        if(idea.id === this.props.currentUser.id){
          console.log("offers", idea.offers.length)
          if(idea.offers.length >= 1){
          return idea.likers.map(likes => {
            return (
              <div>
              <p>COMPANY: {likes.name}</p>
              <p>CONTACT: {likes.contact}</p>
              <p>EMAIL: {likes.email}</p>
              </div>
            )
          })
        }
        }
      })
    }
    </Card>
      <button class='ui button blue basic button' onClick={this.props.goBack}>GO BACK</button>
      <button class='ui button blue basic button' onClick={() => this.props.deleteIdea(this.props.findIdea.id)}>DEAD IDEA</button>
      </Card>
      </div>
      </Card>
    )
      }
}

export default SelectedIdea;
