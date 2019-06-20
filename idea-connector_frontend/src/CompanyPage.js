import React, { Component } from 'react';
import './App.css';
import Modal from 'react-responsive-modal';
import NewCarousel from './NewCarousel.js'
import { Card, Button, Row, Col } from 'react-materialize'
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
    search: '',
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
    console.log("ideaf", this.props.foundIdea)
    return (
      <div className="needs">
      {this.state.aboutClick ?
        <div className='companyInfoDiv'>
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
    {this.state.needIdeaClick ?
      <div className="pic" onClick={this.handleNeedIdea} style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
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
        someLikes={this.props.likes}
        likedIdea={this.props.likedIdea}
        updateIdeas={this.props.updateIdeas}/> :
        <IdeaList
        otherIdeas={this.filterCategories()}
        ideas={this.props.ideas}
        foundIdea={this.props.foundIdea}
        />}
      </div>
      </div>
    }
    <div className="pic" style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
    {this.state.newCarouselClick ?
    <NewCarousel
    clickedIdea={this.props.clickedIdea}
    foundIdea={this.props.foundIdea}
    clickedIdeaBack={this.props.clickedIdeaBack}
    users={this.state.users}
    handleClickedIdea={this.handleClickedIdea}/>
    :
    <Modal open={this.state.open} center>
    <div>
    {
      this.props.foundIdea.map(idea => {
        return (
          <div>
          <div>
          <iframe height="500px" width="750px" src={idea.video}/>
          <p class="flow-text grey-text text-darken-2">{idea.description}</p>
          </div>
          <div>
          <Button className="blue lighten-2" onClick={this.clickedIdeaBack}>GO BACK</Button>
          </div>
          </div>
        )
      })
    }
    </div>
    </Modal>
  }
    </div>
      </div>
    );
  }
}

export default CompanyPage;
