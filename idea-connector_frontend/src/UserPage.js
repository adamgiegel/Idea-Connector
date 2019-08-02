import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import UserForm from './UserForm'
import SeeIdeas from './SeeIdeas';
import Modal from 'react-responsive-modal';
import NewIdea from './NewIdea';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'

class UserPage extends Component {

  state = {
    clicked: true,
    backgroundImage: 'url("https://optinmonster.com/wp-content/uploads/2017/02/Blog-Post-Ideas-1.png")'
  }

handleClick = () => {
  this.setState({
    clicked: !this.state.clicked
  })
}

  render() {
    return (
      <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <div className="carouselIdea1">
      <br></br>
      <h1 id="carouselIdea1">Welcome back, {this.props.currentUser.name} !</h1>
      <img src="https://media.giphy.com/media/Wj7lNjMNDxSmc/giphy.gif" alt="sss"/>
      </div>
        <div>
          <div>
            <SeeIdeas
                deleteIdeaBack={this.props.deleteIdeaBack}
                clicked2={this.props.clicked2}
                currentUser={this.props.currentUser}
                handleClicked={this.props.handleClicked}
                foundIdea={this.props.foundIdea}
                deleteIdea={this.props.deleteIdea}
                ideas={this.props.ideas}/>
          </div>
          <div>
            <NewIdea
                open1={this.props.open1}
                onOpenModal={this.props.onOpenModal}
                onCloseModal={this.props.onCloseModal}
                currentUser={this.props.currentUser}
                foundIdea={this.props.foundIdea}
                addNewIdea={this.props.addNewIdea}
                deleteIdea={this.props.deleteIdea}/>
            </div>
            <div className="pic" style={{backgroundImage: 'url("https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3045058-poster-p-1-4-strategies-for-introducing-new-ideas-at-work.jpg")'}}>
            <h1 className="aboutWords">HERE ARE SOME COMPANIES THAT LIKE YOUR WORK</h1>
            {
              this.props.users.map(idea => {
                return idea.ideas.map(likes => {
                    if(likes.likers.length > 1){
                      console.log(likes.likers)
                    }
                })
              })
            }
            </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
