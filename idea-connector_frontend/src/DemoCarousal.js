import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousal extends Component {
    render() {
        return (
          {
            this.props.users.map(user => {
              return user.ideas.map(idea => {
                return (
                  <Carousel>
                  <div key={idea.id} onClick={() => this.foundIdea(idea.id)}>
                  <h4>{idea.title}</h4>
                  <h5>{idea.description}</h5>
                  </div>
                  </Carousel>
                )
              })
            })
          }
        )
    }
}

export default DemoCarosual;
