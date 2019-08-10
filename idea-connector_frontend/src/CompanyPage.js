import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
import NewCarousel from './NewCarousel.js'
import { Card, Button, Row, Col } from 'react-materialize'
import SearchForm from './SearchForm'
import EditCompanyForm from './EditCompanyForm'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Carousal from './Carousal'
import SearchedIdeas from './SearchedIdeas'
import IdeaList from './IdeaList'
import ButtonExampleLabeled from './LikeButton'

class CompanyPage extends Component {

  state = {
    needIdeaClick: true,
    aboutClick: true,
    search: '',
  }



  handleChangeSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filterCategories = () => {
    return this.props.ideas.filter(idea => {
      console.log("poop", idea.category)
      return idea.category.toLowerCase().includes(this.state.search.toLowerCase())
    })
  }

handleNeedIdea = () => {
  this.setState({
    needIdeaClick: !this.state.needIdeaClick
  })
}

handleAboutClick = () => {
  this.setState({
    aboutClick: !this.state.aboutClick
  })
}


  render() {
    return (
      <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="pic2" style={{backgroundImage: 'url("https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif")'}}>
      <br></br>
      <br></br>
      <br></br>
      <h1 id="carouselIdea1">Welcome back, {this.props.currentUser.contact} !</h1>
      </div>
      <div className="pic" style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
            <br></br>
            <br></br>
            <br></br>
            <NewCarousel
            newCarouselClick={this.props.newCarouselClick}
            foundIdea={this.props.foundIdea}
            findIdea={this.props.findIdea}
            open1={this.props.open1}
            onOpenModal={this.props.onOpenModal}
            onCloseModal={this.props.onCloseModal}
            users={this.props.users}
            handleClickedIdea={this.props.handleClickedIdea}/>
      </div>
      <div>
      {this.state.aboutClick ?
        <div className="aboutMoneyDiv">
          <p className="coke">{this.props.currentUser.name}</p>
          <p className="coke1">{this.props.currentUser.about}</p>
          <button class='ui button' onClick={this.handleAboutClick}>EDIT YOUR INFO</button>
          </div>
      :
      <div>
      <EditCompanyForm
      newCompany={this.props.newCompany}
      handleAboutClick={this.handleAboutClick}
      currentUser={this.props.currentUser}/>
      </div>
    }
    {this.state.needIdeaClick ?
      <div className="pic" onClick={this.handleNeedIdea} style={{backgroundImage: 'url("http://cdn.acodez.in/wp-content/uploads/2017/10/Digital-advertising-India-Infographic.jpg")'}}>
        <h1>CLICK TO SEE MORE ADS</h1>
      </div>
      :
      <div className="searchedIdeas">
      <SearchForm

      onClick={this.ideaDetails}
      needIdeaClick={this.state.needIdeaClick}
      handleNeedIdea={this.handleNeedIdea}
      handleChangeDetails={this.props.handleChangeDetails}
      handleChangeSearch={this.handleChangeSearch}
      search={this.state.search}/>
      <div>

      {this.props.ideaClick ?
        <SearchedIdeas
        currentUser={this.props.currentUser}
        ideas={this.props.ideas}
        ideaClick={this.props.ideaClick}
        goBack={this.props.goBack}
        findIdea={this.props.findIdea}
        foundIdea={this.props.foundIdea}
        someLikes={this.props.likes}
        likedIdea={this.props.likedIdea}
        updateIdeas={this.props.updateIdeas}/> :
        <IdeaList
        otherIdeas={this.filterCategories()}
        ideas={this.props.ideas}
        findIdea={this.props.findIdea}
        />}
      </div>
      </div>
    }
      </div>
      </div>
    );
  }
}

export default CompanyPage;
