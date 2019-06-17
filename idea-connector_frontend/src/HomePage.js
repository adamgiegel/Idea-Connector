import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import UserPage from './UserPage'
import CompanyPage from './CompanyPage'
import idea from './Ideas.jpg'
import Navbar from './Navbar'
import NewCarousel from './NewCarousel.js'
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'


class HomePage extends Component {

state = {
    users: [],
    companies: [],
    ideas: [],
    selected: 'item1',
    foundIdea: '',
    loggedIn: false,
    currentUser: '',
    value: '',
    ideaClick: '',
    likedIdea: '',
    clickedIdea: true,
    clicked2: true,
    shadup: true,
    backgroundImage: 'url("https://www.bloopanimation.com/wp-content/uploads/2013/07/finding-story-ideas-1103x575.jpg")',
    backgroundImage1: 'url("https://www.incimages.com/uploaded_files/image/1940x900/ideas-lightbulb-illo_1940x900_34046.jpg")',
  }

componentDidMount(){
  fetch('http://localhost:3000/api/v1/users')
  .then(response => response.json())
  .then(user => {
    this.setState({
      users: user
    })
  })
  fetch('http://localhost:3000/api/v1/ideas')
  .then(response => response.json())
  .then(idea => {
    this.setState({
      ideas: idea
    })
  })
  fetch('http://localhost:3000/api/v1/companies')
  .then(response => response.json())
  .then(company => {
    this.setState({
      companies: company
    })
  })
}


clickedIdeaBack = () => {//to set the state of clickedIdea to the opposite of what the state is...used in Carousel
  this.setState({
    clickedIdea: !this.state.clickedIdea
  })
}

handleClickedIdea = (id) => {//find the specific idea from the passed in id located in the Carousel
  const foundIdea = this.state.users.map(user => {
    return user.ideas.find(idea => {
      return idea.id === id
    })
  })
  const findIdea = foundIdea.filter(idea => {
    return idea
  })
  this.setState({
    foundIdea: findIdea,
    clickedIdea: !this.state.clickedIdea,
  }, console.log("found Idea", this.state.foundIdea))
}

updateIdeas = (id) => {//is a Patch to update the num_likes on the backend
fetch(`http://localhost:3000/api/v1/likes`, {
  method: "POST",
  headers:{
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({idea_id: id, company_id: this.state.currentUser.id}),
})
.then(res => res.json())
.then(like => {
  console.log("like", like)
  this.setState({
    foundIdea: [...this.state.ideas, like]
  }, () => console.log(this.state.foundIdea))
})
}

deleteIdea = (id) => {//Delete method to delete an idea
  fetch(`http://localhost:3000/api/v1/ideas/${id}`, {method: "DELETE"})
  const filterIdeas = this.state.ideas.filter(idea => {//find the idea needed and filter it from all ideas
    return idea.id !== id
  })
  this.setState({
    ideas: filterIdeas,//set the state of ideas
    clicked2: !this.state.clicked2
  })
}

deleteIdeaBack = () => {
  this.setState({
    clicked2: !this.state.clicked2
  })
}

addNewIdea = (idea) => {//function to change state with the new Idea passed up from UserForm.js
  this.setState(prevState => {
    return {
      ideas: [...prevState.ideas, idea],
      currentUser: {...prevState.currentUser, ideas: [...prevState.currentUser.ideas, idea]}
    }
  })
}

goBack = () => {
  this.setState({
    ideaClick: !this.state.ideaClick
  })
}




newCompany = (id, name, about, email, contact) => {//used to update the state for the company information from EditCompanyForm.js
    let companyCopy = [...this.state.companies]
    const companyIdx = companyCopy.findIndex(company => company.id === id)
    const company = {...companyCopy[companyIdx]}
    company.name = name
    company.about = about
    company.email = email
    company.contact = contact
    companyCopy[companyIdx] = company
    this.setState({
      companies: companyCopy,
    })
}


foundIdea = (id) => {//finds the selected idea when clicked on by the company in the list of ideas
  const foundIdea = this.state.users.map(user => {
    return user.ideas.find(idea => {
      return idea.id === id
    })
  })
  const findIdea = foundIdea.filter(idea => {
    return idea
  })
  this.setState({
    foundIdea: findIdea,
    ideaClick: !this.state.ideaClick,
  })
}



aboutClick = () => {
  this.setState({
    shadup: !this.state.shadup
  })
}

render() {
  console.log(this.state.foundIdea)
  return (
    <div>
    <div>
    <div className="pic" style={{backgroundImage: this.state.backgroundImage}}>
    <br></br>
    <h1 className="ideaConnector">IDEA CONNECTOR</h1>
    </div>
    <div className="pic" style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
          <NewCarousel
          users={this.state.users}
          handleClickedIdea={this.handleClickedIdea}/>
    </div>
    <div className="pic" style={{backgroundImage: 'url("https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3045058-poster-p-1-4-strategies-for-introducing-new-ideas-at-work.jpg")'}}>
    <h1 className="about">ABOUT</h1>
        <h3 className="aboutWords">HAVE YOU EVER HAD A GOOD IDEA AND WANTED TO PITCH IT TO A COMPANY BUT DIDNT KNOW HOW?</h3>

        <h3 className="aboutWords">OR ARE YOU A COMPANY THAT NEEDS AN IDEA BUT CAN'T COME UP WITH ONE?</h3>
        <h3 className="aboutWords">WE CONNECT ADVERTISERS WITH COMPANIES.  YOU SUBMIT AN IDEA AND IF A COMPANY LIKES IT THEY OFFER YOU SOME COLD HARD CASH</h3>
        </div>
    </div>
    </div>
  );
}

}

export default HomePage;

//inside render
// <Router>
//   <div className="App">
//     <Route exact path="/" render={()=>(
//       this.state.loggedIn ? (<Redirect to="/dashboard"/>) : (<Login
//         handleChangeDropdown={this.handleChangeDropdown}
//         handleLogin={this.handleLogin}
//         value={this.state.value}
//         users={this.state.users}
//         foundIdea={this.state.foundIdea}
//         handleClickedIdea={this.handleClickedIdea}
//         clickedIdea={this.state.clickedIdea}
//         clickedIdeaBack={this.clickedIdeaBack}/>)
//     )} />
//     {this.dashBoardRoute()}
//   </div>
// </Router>

// :
// <Card>
// <div>
// {
//   this.foundIdea.map(idea => {
//     return (
//       <div>
//       <div>
//       <iframe height="300px" width="500px" src={idea.video}/>
//       <p class="flow-text grey-text text-darken-2">{idea.description}</p>
//       </div>
//       <div>
//       <Button className="blue lighten-2" onClick={this.clickedIdeaBack}>GO BACK</Button>
//       </div>
//       </div>
//     )
//   })
// }
// </div>
// </Card>
// }

// dashBoardRoute(){
//   if (this.state.loggedIn === true){
//       return <Route path="/dashboard" render={() => this.dashBoardComponents()} />
//   } else if (this.state.loggedIn === false){
//       return <Redirect to="/" />
//   }
// }

// fetchUser(username, password){
//   if (this.state.value === 'user'){
//   fetch('http://localhost:3000/api/v1/users/login', {
//   method: "POST",
//   headers:{
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body:JSON.stringify({
//     "username": username,
//     "password": password,
//   }),
// })
// .then(res => res.json())
// .then(res => {
//   if(res.error){
//     alert(res.error)
//   } else {
//     this.setState({
//       currentUser: res,
//       loggedIn: true,
//     })
//   }
//  })
// } else if (this.state.value === 'company') {
//   fetch('http://localhost:3000/api/v1/login', {
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body:JSON.stringify({
//       "username": username,
//       "password": password,
//     }),
//   })
//   .then(res => res.json())
//   .then(res => {
//     if(res.error){
//       alert(res.error)
//     } else {
//       this.setState({
//         currentUser: res,
//         loggedIn: true,
//       })
//     }
//    })
// }
// }

// handleLogin =(e, username, password) => {//handles the login event and receives username and password from Login.js
//   e.preventDefault()
//   this.fetchUser(username, password)
// }
//
// handleLogout = () => {//sets the state of currentUser back to an empty string and loggedIn back to false
//   this.setState({
//     currentUser: '',
//     loggedIn: false
//   })
// }
