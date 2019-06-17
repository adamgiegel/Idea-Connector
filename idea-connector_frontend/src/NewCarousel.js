import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel'
import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Row, Col } from 'react-materialize'



const { red, blue, green, grey } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

class NewCarousel extends Component {

  state = {
    open: '',
  }

render () {
  console.log("foundIdea", this.props.foundIdea)
  return (
    <div style={{ position: 'relative', width: '100%', height: 700 }}>
      <div onClick={() => this.setState({ open: true })}>
      <h1 className="words">CLICK TO SEE MORE EXAMPLE ADS</h1>
      </div>
      <AutoRotatingCarousel
        open={this.state.open}
        onClose={() => this.setState({ open: false })}
        onStart={() => this.setState({ open: false })}
        style={{ position: 'absolute' }}
      >
                {
                this.props.users.map(user => {
                  return user.ideas.map(idea => {
                    return (
                      <div onClick={() => this.props.handleClickedIdea(idea.id)} key={idea.id}>
                      <Slide
                        media={<img height="400px" src={idea.image}/>}
                        mediaBackgroundStyle={{ backgroundColor: grey[900] }}
                        style={{ backgroundColor: grey[900] }}
                        title={idea.description}
                      />
                      </div>
                    )
                  })
                })
              }
      </AutoRotatingCarousel>
    </div>
    )
  }
}

export default NewCarousel;

// :
// <div>
// {
//  this.props.foundIdea.map(idea => {
//    return (
//      <div>
//      <div>
//      <iframe height="300px" width="500px" src={idea.video}/>
//      <p class="flow-text grey-text text-darken-2">{idea.description}</p>
//      </div>
//      <div>
//      <Button className="blue lighten-2" onClick={this.clickedIdeaBack}>GO BACK</Button>
//      </div>
//      </div>
//    )
//  })
// }
// </div>
// }
