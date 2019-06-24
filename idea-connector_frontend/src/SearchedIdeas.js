import React, { Component } from 'react';
import './App.css';
import ButtonExampleLabeled from './LikeButton'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card } from 'react-materialize'

class SearcedIdeas extends Component {

  state = {
    offers: [],
    amount: 0,
    idea_id: this.props.findIdea.id,
    company_id: this.props.currentUser.id,
    offer: true
  }

componentDidMount = () => {
  fetch('http://localhost:3000/api/v1/offers')
  .then(response => response.json())
  .then(offer => {
    this.setState({
      offers: offer
    })
  })
}

postNewOffer = (e) => {
  e.preventDefault()
  const amount = this.state.amount;
  const ideaId = this.state.idea_id;
  const companyId = this.state.company_id
  fetch('http://localhost:3000/api/v1/offers', {
    method: "POST",
    body: JSON.stringify({
      amount: amount,
      idea_id: ideaId,
      company_id: companyId
    }),
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
    .then(r => r.json())
    .then(newOffer => {
      this.setState({
        offers: [...this.state.offers, newOffer],
        amount: 0
      })
    })
    this.makeOffer()
}

handleChangeForm = (e) => {
  this.setState({
    amount: e.target.value
  })
}

makeOffer = () => {
  this.setState({
    offer: !this.state.offer,
    amount: 0
  })
}


  render() {
    console.log("findIdea", this.props.foundIdea)
    return (
      this.props.foundIdea.map(idea => {
        return (
          <div>
            <Card>
              <ButtonExampleLabeled
                  {...idea}
                  otherIdeas={this.props.ideas}
                  someLikes={this.props.someLikes}
                  likedIdea={this.props.likedIdea}
                  updateIdeas={this.props.updateIdeas}/>
                  <div>
                    <iframe title="movie" height="300px" width="500px" src={idea.video}/>
                    <Card>
                      <p className="description">{idea.description}</p>
                    </Card>
                    <button onClick={this.props.goBack} class='ui button'>GO BACK</button>
                      {this.state.offer ?
                      <button onClick={this.makeOffer} class='ui button'>MAKE OFFER</button>
                      :
                      <Card>
                        <div>
                          <div class="row">
                            <form onSubmit={(e) => this.postNewOffer(e)} class="col s12">
                              <div class="row">
                                <div class="input-field col s4">
                                  <i class="material-icons prefix">attach_money</i>
                                  <input onChange={this.handleChangeForm} id="icon_prefix" type="text" value={this.state.amount} class="validate center-align"/>
                                  <label for="icon_prefix">Offer</label>
                                </div>
                              </div>
                            </form>
                            <button onClick={this.makeOffer} class="ui button" type="submit">MAKE OFFER</button>
                          </div>
                        </div>
                      </Card>
                    }
              </div>
            </Card>
        </div>
      )
      })
    );
  }
}

export default SearcedIdeas;
