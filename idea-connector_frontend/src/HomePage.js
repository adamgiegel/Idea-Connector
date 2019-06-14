import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import UserPage from './UserPage'
import CompanyPage from './CompanyPage'
import Navbar from './Navbar'
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
    shadup: true
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
  })
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

dashBoardComponents() {
  return (
    <div>
      <div>
        <div className="App" >
          <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        </div>
      </div>
        {
          this.state.value === "company" ?
            <CompanyPage
              ideas={this.state.ideas}
              clickedIdea={this.state.clickedIdea}
              clickedIdeaBack={this.clickedIdeaBack}
              handleClickedIdea={this.handleClickedIdea}
              handleChangeSearch={this.handleChangeSearch}
              search={this.state.search}
              foundIdea={this.foundIdea}
              findIdea={this.state.foundIdea}
              ideaClick={this.state.ideaClick}
              goBack={this.goBack}
              likedIdea={this.state.likedIdea}
              updateIdeas={this.updateIdeas}
              users={this.state.users}
              companies={this.state.companies}
              currentUser={this.state.currentUser}
              newCompany={this.newCompany}/>
            :
          <div className="ui container">
            <UserPage
              clicked2={this.state.clicked2}
              deleteIdeaBack={this.deleteIdeaBack}
              ideas={this.state.ideas}
              currentUser={this.state.currentUser}
              foundIdea={this.state.foundIdea}
              addNewIdea={this.addNewIdea}
              deleteIdea={this.deleteIdea}/>
          </div>
        }
    </div>
  )
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
    <Row >
    <div>
    <h1 className="ideaConnector">IDEA CONNECTOR</h1>
    </div>
    <div>
    <Card>
        <Carousel className="carousel" infiniteLoop autoPlay height="1000px" width="900px" showThumbs={false}>
          {
            this.state.users.map(user => {
              return user.ideas.map(idea => {
                return (
                  <div onClick={() => this.handleClickedIdea(idea.id)} key={idea.id}>
                  <img height="400px" src={idea.image}/>
                  <p className="legend">{idea.description.substring(0, 100)}...</p>
                  </div>
                )
              })
            })
          }
        </Carousel>
        </Card>
    </div>
      <Col s={4}>
      </Col>
      <Col s={3} m={4}>
        {
        !this.state.shadup ?
        <div>
        <a onClick={this.aboutClick} class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">arrow_back</i></a>
        {this.state.showSignUp === false ? this.loginForm() : this.signUpForm()}
        </div>
        :
        <div>
        <Card>
        <h1 className="about">ABOUT</h1>
        <p className="aboutWords">HAVE YOU EVER HAD A GOOD IDEA AND WANTED TO PITCH IT TO A COMPANY BUT DIDNT KNOW HOW?</p>

        <p className="aboutWords">OR ARE YOU A COMPANY THAT NEEDS AN IDEA BUT CAN'T COME UP WITH ONE?</p>

        <p className="aboutWords">WE CONNECT ADVERTISERS WITH COMPANIES.  YOU SUBMIT AN IDEA AND IF A COMPANY LIKES IT THEY OFFER YOU SOME COLD HARD CASH</p>
        <Button onClick={this.aboutClick}>LOG IN</Button>
        </Card>
        </div>
      }
      </Col>
    </Row>
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
