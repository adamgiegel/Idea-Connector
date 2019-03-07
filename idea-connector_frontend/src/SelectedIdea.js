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
    backgroundImage: 'url("https://www.appsterhq.com/wp-content/uploads/2017/10/idea.jpg")',
    accept: ""
  }

  rejectedOffer = () => {
   if(this.state.accept === "NO"){
     return <p>STATUS: <p>REJECTED.</p>CONTACT THE COMPANY TO NEGOTIATE</p>
   } else if (this.state.accept === "YES"){
     return <p>STATUS: <p>ACCEPTED!</p>YOU WILL BE FAMOUS SOON!</p>
   }
 }

 handleAccept = (event) => {
 this.setState({
    accept: event.target.innerText
 })
}

  render(){
    console.log("cooococ", this.props.findIdea)
    return(
      <Card className="myIdeasCard2">
      <Button as='div' labelPosition='right'>
        <Button icon>
          <Icon name='heart' />
          Likes
        </Button>
        <Label s='a' basic pointing='left'>
          {this.props.findIdea.num_likes}
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
        if(idea.id === this.props.findIdea.id){
          if(idea.offers.length >= 1){
          return (
            <div>
            {idea.offers.map(offer => {
              console.log("wtf", offer)
              return <div>
              <Card>
              <p>OFFER AMOUNT: ${offer.amount}</p><p onClick={(e) => this.handleAccept(e)}>YES</p><p onClick={(e) => this.handleAccept(e)}>NO</p>
              <p>ACCEPT OFFER?</p>
              </Card>
              </div>
            })}
            <ul>
             <li onClick={(e) => this.handleAccept(e)}>YES</li>
             <li onClick={(e) => this.handleAccept(e)}>NO</li>
           </ul>
         {this.rejectedOffer()}
            </div>
          )
      }
      }
      })
    }
    <Card>
  {
      this.props.ideas.map(idea => {
        if(idea.id === this.props.findIdea.id){
          if(idea.companies.length >= 1){
          return idea.companies.map(likes => {
            return (
              <div>
              THE COMPANY BELOW MADE YOU AN OFFER IS WAITING FOR YOU TO CONTACT THEM.
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
    <Card>
  {
      this.props.ideas.map(idea => {
        if(idea.id === this.props.findIdea.id){
          console.log("offers", idea.offers.length)
          if(idea.likers.length >= 1){
          return idea.likers.slice(0,1).map(likes => {
            return (
              <div>
              THE COMPANY BELOW LIKED YOUR IDEA AND IS WAITING FOR YOU TO CONTACT THEM.
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
