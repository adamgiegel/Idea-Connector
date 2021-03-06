import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


class IdeaList extends Component {



  render() {
    return (
      <div>
        {
          this.props.otherIdeas.map(idea => {
            if(!this.props.ideaClick)
              return (
                <div class="card-panel hoverable" onClick={() => this.props.findIdea(idea.id)} style={{cursor:'pointer'}}><p className="coke2">{idea.title}</p></div>
              )
            })
        }
      </div>
    )
  }
}

export default IdeaList;
