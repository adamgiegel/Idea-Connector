import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'

class ButtonExampleLabeled extends Component{


  render(){
    const thisLikes = this.props.otherIdeas.find(idea => {
      return idea.id === this.props.id
    })
    console.log(thisLikes)
    return (
      <div>
              <Button onClick={() => this.props.updateIdeas(this.props.id)} as='div' labelPosition='right'>
                <Button icon>
                  <Icon name='heart' />
                  Like
                </Button>
                <Label s='a' basic pointing='left'>
                  {thisLikes.num_likes}
                </Label>
              </Button>
            </div>
    )
  }
}


export default ButtonExampleLabeled
