import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import IdeaDisplay from './IdeaDisplay'
import SearchForm from './SearchForm'
import EditCompanyForm from './EditCompanyForm'
import ButtonExampleLabeled from './LikeButton'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Carousal from './Carousal'
import SearchedIdeas from './SearchedIdeas'
import IdeaList from './IdeaList'

class CompanyPage extends Component {

  state = {
    needIdeaClick: true,
    aboutClick: true,
    search: ''
  }

  handleChangeSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filterCategories = () => {
    return this.props.ideas.filter(idea => {
      console.log(idea.category)
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
      {this.state.aboutClick ?
        <div>
          <p className="companyInfo">{this.props.currentUser.name}</p>
          <p className="companyInfo1">{this.props.currentUser.about}</p>
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
    <Carousal
    clickedIdea={this.props.clickedIdea}
    handleClickedIdea={this.props.handleClickedIdea}
    users={this.props.users}
    foundIdea={this.props.findIdea}
    clickedIdeaBack={this.props.clickedIdeaBack}/>


    {this.state.needIdeaClick ?
      <div>
      <Card className="needIdea" onClick={this.handleNeedIdea}
      image='https://media.giphy.com/media/RLUPuPHz1uqd5rJEFa/giphy.gif'
      description="NEED AN IDEA?"
      />
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
        ideas={this.props.ideas}
        ideaClick={this.props.ideaClick}
        goBack={this.props.goBack}
        findIdea={this.props.findIdea}
        someLikes={this.props.likes}
        likedIdea={this.props.likedIdea}
        likeIdea={this.props.likeIdea}
        updateIdeas={this.props.updateIdeas}/> :
        <IdeaList
        otherIdeas={this.filterCategories()}
        ideas={this.props.ideas}
        foundIdea={this.props.foundIdea}
        />}
      </div>
      </div>
    }
      </div>
    );
  }
}

export default CompanyPage;


// onClick={this.goBack}

// <SearchForm />
// <All Ideas/>
// <Ideas you selected>
// <Email an Offer Form>
