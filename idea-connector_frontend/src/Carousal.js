import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'

class CompanyPage extends Component {

  render() {
    return (
      <div>
        {this.props.clickedIdea ? //If that state of clicked passed down from CompanyPage is true then render this Card
        <Card>
          <Carousel className="carousel" infiniteLoop autoPlay height="1000px" width="900px" showThumbs={false}>
            {
              this.props.users.map(user => {//map over all the users
                return user.ideas.map(idea => {//map over the ideas to get the individual idea
                  return (
                    <div onClick={() => this.props.handleClickedIdea(idea.id)} style={{cursor:'pointer'}} key={idea.id}>//Pass the idea id back up to the event handler in the homepage when the div is clicked, changing the state of clickedIdea to false
                    <img height="400px" src={idea.image}/>
                    <p className="legend">{idea.description.substring(0, 100)}...</p>
                    </div>
                  )
                })
              })
            }
          </Carousel>
        </Card>
        :
        <Card>
          <div>
          {
            this.props.foundIdea.map(idea => {//map over the foundIdea that was found in handleClickedIdea in the homepage
              return (
                <div>
                  <div>
                    <iframe height="300px" width="500px" src={idea.video}/>
                      <Card>
                        <p class="flow-text grey-text text-darken-2">{idea.description}</p>
                      </Card>
                  </div>
                    <div>
                      <Button className="gray" onClick={this.props.clickedIdeaBack} style={{cursor:'pointer'}}>GO BACK</Button>
                    </div>
                </div>
                )
              })
            }
            </div>
        </Card>
    }
      </div>
    );
  }
}

export default CompanyPage;
