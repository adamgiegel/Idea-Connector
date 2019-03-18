import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import UserForm from './UserForm'
import SeeIdeas from './SeeIdeas';
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
      <div>
        <Card className="yourIdeaCard">
          <div class="card-panel hoverable">
            <h1 className="yourIdea">YOUR IDEA CONNECTION</h1>
          </div>
        </Card>
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
                currentUser={this.props.currentUser}
                foundIdea={this.props.foundIdea}
                addNewIdea={this.props.addNewIdea}
                deleteIdea={this.props.deleteIdea}/>
            </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
