import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'

class ButtonExampleLabeled extends Component{


  render(){
    console.log("id", this.props.id)
    return (
      <div>
        <Button onClick={() => this.props.updateIdeas(this.props.id)} style={{cursor:'pointer'}} as='div' labelPosition='right'>
          <Button icon>
            <Icon name='heart' />
            Like
          </Button>
          <Label s='a' basic pointing='left'>
            {this.props.likedIdea.num_likes}
          </Label>
        </Button>
      </div>
    )
  }
}


export default ButtonExampleLabeled
