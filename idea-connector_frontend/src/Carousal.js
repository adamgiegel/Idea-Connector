import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import { Card, Icon } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';
import IdeaDisplay from './IdeaDisplay'
import SearchForm from './SearchForm'
import EditCompanyForm from './EditCompanyForm'
import ButtonExampleLabeled from './LikeButton'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'

class CompanyPage extends Component {



  render() {
    console.log("foundIdea", this.props.foundIdea)
    return (
      <div>
      {this.props.clickedIdea ?
        <Card>
          <Carousel className="carousel" infiniteLoop autoPlay height="1000px" width="900px" showThumbs={false}>
            {
              this.props.users.map(user => {
                return user.ideas.map(idea => {
                  return (
                    <div onClick={() => this.props.handleClickedIdea(idea.id)} key={idea.id}>
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
          this.props.foundIdea.map(idea => {
            return (
              <div>
              <div>
              <iframe height="300px" width="500px" src={idea.video}/>
              <Card>
              <p class="flow-text grey-text text-darken-2">{idea.description}</p>
              </Card>
              </div>
              <div>
              <Button className="gray" onClick={this.props.clickedIdeaBack}>GO BACK</Button>
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
