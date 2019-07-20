import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Label, Button } from 'semantic-ui-react'
import UserForm from './UserForm'
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
     return <p className="status">STATUS: <p className="rejected">REJECTED.</p>CONTACT THE COMPANY TO NEGOTIATE</p>
   } else if (this.state.accept === "YES"){
     return <p className="status">STATUS: <p className="accepted">ACCEPTED!</p>YOU WILL BE FAMOUS SOON!</p>
   }
 }

 handleAccept = (event) => {
 this.setState({
    accept: event.target.innerText
 })
}

  render(){
    return(
      <div>
      <div className="pic2">
      <br></br>
      <iframe height="450px" width="750px" src={this.props.findIdea.video}/>
      <Button as='div' labelPosition='right'>
        <Button icon>
          <Icon name='heart' />
          Likes
        </Button>
        <Label s='a' basic pointing='left'>
          {this.props.findIdea.num_likes}
        </Label>
      </Button>
      </div>
      <div>
      {
      this.props.ideas.map(idea => {
        if(idea.id === this.props.findIdea.id){
          if(idea.offers.length >= 1){
          return (
            <div>
            {idea.offers.map(offer => {
              return <div>
              <p className="accepted">OFFER AMOUNT: ${offer.amount}</p>
              <p className="acceptOffer">ACCEPT OFFER?</p>
              </div>
            })}
            <div>
             <button class="ui button" onClick={(e) => this.handleAccept(e)} style={{cursor:'pointer'}}>YES</button>
             <button class="ui button" onClick={(e) => this.handleAccept(e)} style={{cursor:'pointer'}}>NO</button>
           </div>
         {this.rejectedOffer()}
            </div>
          )
      }
      }
      })
      }
      </div>
      <div>
      <br></br>
      <p>{this.props.findIdea.description}</p>
      </div>
      <button class='ui button blue basic button' onClick={this.props.goBack}>GO BACK</button>
      <button class='ui button blue basic button' onClick={() => this.props.deleteIdea(this.props.findIdea.id)}>DEAD IDEA</button>
      </div>
    )
      }
}

export default SelectedIdea;

// {
// this.props.ideas.map(idea => {
//   if(idea.id === this.props.findIdea.id){
//     if(idea.offers.length >= 1){
//     return (
//       <div>
//       {idea.offers.map(offer => {
//         return <div>
//         <p className="accepted">OFFER AMOUNT: ${offer.amount}</p>
//         <p className="acceptOffer">ACCEPT OFFER?</p>
//         </div>
//       })}
//       <div>
//        <button class="ui button" onClick={(e) => this.handleAccept(e)} style={{cursor:'pointer'}}>YES</button>
//        <button class="ui button" onClick={(e) => this.handleAccept(e)} style={{cursor:'pointer'}}>NO</button>
//      </div>
//    {this.rejectedOffer()}
//       </div>
//     )
// }
// }
// })
// }

// <div>
// <br></br>
// <p className='aboutWords1'>{this.props.findIdea.description}</p>
// </div>
// <button class='ui button blue basic button' onClick={this.props.goBack}>GO BACK</button>
// <button class='ui button blue basic button' onClick={() => this.props.deleteIdea(this.props.findIdea.id)}>DEAD IDEA</button>
// </div>
