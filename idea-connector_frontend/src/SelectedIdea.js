import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Label } from 'semantic-ui-react'
import UserForm from './UserForm'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Row, Col, Button } from 'react-materialize'

class SelectedIdea extends Component{

  state = {
    backgroundImage: 'url("https://www.appsterhq.com/wp-content/uploads/2017/10/idea.jpg")',
    accept: ""
  }

  rejectedOffer = () => {
   if(this.state.accept === "NO"){
     return <p className="status">STATUS: <p className="aboutMoneyR">REJECTED.</p>CONTACT THE COMPANY TO NEGOTIATE</p>
   } else if (this.state.accept === "YES"){
     return <p className="status">STATUS: <p className="aboutMoneyA">ACCEPTED!</p>YOU WILL BE FAMOUS SOON!</p>
   }
 }

 handleAccept = (event) => {
 this.setState({
    accept: event.target.innerText
 })
}

  render(){
    return(
      <div className="ideasGray">
      <div className="pic2">
      <br></br>
      <Card>
      <iframe height="450px" width="750px" src={this.props.findIdea.video}/>
      </Card>
      </div>
      <Button className='btn-large'>
          <Icon name='heart' />
          {this.props.findIdea.num_likes}
      </Button>
      <div>
      {
      this.props.ideas.map(idea => {
        if(idea.id === this.props.findIdea.id){
          if(idea.offers.length >= 1){
          return (
            <div>
            {idea.offers.map(offer => {
              return <div>
              <p className="aboutIdeasFont4">OFFER AMOUNT: ${offer.amount}</p>
              <p className="aboutMoneyP">ACCEPT OFFER?</p>
              </div>
            })}
            <div>
             <Button class="ui button" onClick={(e) => this.handleAccept(e)} style={{cursor:'pointer'}}>YES</Button>
             <Button class="ui button" onClick={(e) => this.handleAccept(e)} style={{cursor:'pointer'}}>NO</Button>
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
      <Card>
      <p className="aboutMoneyP">{this.props.findIdea.description}</p>
      </Card>
      </div>
      <Button class='ui button large' onClick={this.props.goBack}>GO BACK</Button>
      <Button class='ui button' onClick={() => this.props.deleteIdea(this.props.findIdea.id)}>DEAD IDEA</Button>
      <br></br>
      <br></br>
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
