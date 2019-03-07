import React, { Component } from 'react';
import './App.css';
// import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Login from './Login'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IdeaDisplay from './IdeaDisplay'
import UserPage from './UserPage'
import CompanyPage from './CompanyPage'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'
import IdeaList from './IdeaList'




// const CardExampleCardProps = () => (
//   <Card
//     image='/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//     extra={extra}
//   />
// )

class HomePage extends Component {

state = {
    users: [],
    companies: [],
    ideas: [],
    firstIndex: 0,
    lastIndex: 2,
    selected: 'item1',
    clicked: false,
    foundIdea: '',
    loggedIn: false,
    currentUser: '',
    value: '',
    ideaClick: '',
    likedIdea: '',
    clickedIdea: true,
    companyLikes: [],
    clicked2: true
  }
  //
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

fetchUser(username, password){
  if (this.state.value === 'user'){
  fetch('http://localhost:3000/api/v1/users/login', {
  method: "POST",
  headers:{
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body:JSON.stringify({
    "username": username,
    "password": password,
    // "isCompany": false
  }),
  // redirect: "follow"
})
.then(res => res.json())
.then(res => {
  if(res.error){
    alert(res.error)
  } else {
    this.setState({
      currentUser: res,
      loggedIn: true,
    })
  }
 })
} else if (this.state.value === 'company') {
  fetch('http://localhost:3000/api/v1/login', {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({
      "username": username,
      "password": password,
      // "isCompany": false
    }),
    // redirect: "follow"
  })
  .then(res => res.json())
  .then(res => {
    if(res.error){
      alert(res.error)
    } else {
      this.setState({
        currentUser: res,
        loggedIn: true,
      })
    }
   })
}
}

// likes = () => {
//
// }

clickedIdeaBack = () => {
  this.setState({
    clickedIdea: !this.state.clickedIdea
  })
}

updateIdeas = (id) => {
  const foundIdea = this.state.users.map(user => {
    return user.ideas.find(idea => {
      return idea.id === id
    })
  })
  const findIdea = foundIdea.filter(idea => {
    return idea
  })
  const mapIdea = findIdea[0]
  const data = mapIdea
  console.log("test", data)
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
  this.setState({
    likedIdea: like
  })
})
}


deleteIdea = (id) => {
  fetch(`http://localhost:3000/api/v1/ideas/${id}`, {method: "DELETE"})
  const filterIdeas = this.state.ideas.filter(idea => {
    return idea.id !== id
  })
  this.setState({
    ideas: filterIdeas,
    clicked2: !this.state.clicked2
  })
}

deleteIdeaBack = () => {
  this.setState({
    clicked2: !this.state.clicked2
  })
}


addNewIdea = (idea) => {
  // console.log("old state", this.state.currentUser.ideas, this.state.ideas)
  this.setState(prevState => {
    return {
      ideas: [...prevState.ideas, idea],
      currentUser: {...prevState.currentUser, ideas: [...prevState.currentUser.ideas, idea]}
    }
  }, () => console.log("updated state", this.state.currentUser.ideas, this.state.ideas))
}

goBack = () => {
  this.setState({
    ideaClick: !this.state.ideaClick
  })
}
handleChangeDropdown=(event)=> {
  console.log("event", event.target.value)
    this.setState({value:event.target.value})
  }



newCompany = (id, name, about, email, contact) => {
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
    }, () => console.log("after", this.state.companies))
}


handleClick = () => {
this.setState({
  clicked: true
})
}

handleLogin =(e, username, password) => {
  e.preventDefault()
  this.fetchUser(username, password)
}

handleLogout = () => {
  this.setState({
    currentUser: '',
    loggedIn: false
  })
}

handleMoreClick = () => {
  if(this.state.lastIndex !== this.state.users.length){
  this.setState({
    firstIndex: this.state.firstIndex + 2,
    lastIndex: this.state.lastIndex + 2
  })
}  else {
    this.setState({
      firstIndex: 0,
      lastIndex: 0
    })
}
}


foundIdea = (id) => {
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
    clicked: !this.state.clicked,
    ideaClick: !this.state.ideaClick,
  })
}


handleClickedIdea = (id) => {
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




dashBoardComponents() {
  return (
    <div>
      <div>
        <div className="App" >
        <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} clicked={this.state.clicked} handleClick={this.handleClick} />
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
        likeIdea={this.likeIdea}
        likedIdea={this.state.likedIdea}
        updateIdeas={this.updateIdeas}
        users={this.state.users}
        companies={this.state.companies}
        currentUser={this.state.currentUser}
        likes={this.state.likes}
        companyLikes={this.state.companyLikes}
        newCompany={this.newCompany}
      />
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


dashBoardRoute(){
if (this.state.loggedIn === true){
  return <Route path="/dashboard" render={() => this.dashBoardComponents()} />
} else if (this.state.loggedIn === false){
  return <Redirect to="/" />
}
}

render() {
console.log("crap", this.state.ideas)
  return (
    <Router>
      <div className="App">
      <div>
      </div>
        <Route exact path="/" render={()=>(
          this.state.loggedIn ? (<Redirect to="/dashboard"/>) : (<Login
            handleChangeDropdown={this.handleChangeDropdown}
            handleLogin={this.handleLogin}
            value={this.state.value}
            users={this.state.users}
            foundIdea={this.state.foundIdea}
            handleClickedIdea={this.handleClickedIdea}
            clickedIdea={this.state.clickedIdea}
            clickedIdeaBack={this.clickedIdeaBack}/>)
        )} />
        {this.dashBoardRoute()}
      </div>
    </Router>
  );
}

}



export default HomePage;



// <div className='logos'>
// <img height="80px" width="100px" src='http://logok.org/wp-content/uploads/2014/04/Apple-logo-grey-880x625.png' alt='hi'/>
// <img height="80px" width="100px" src='https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png' alt='hi'/>
// <img height="80px" width="100px" src='https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wxii/33040582-anheuser-busch-logo-jpg.jpg?crop=1xw:1.00000000000000000xh;center,top&resize=640:*' alt='hi'/>
// <img height="80px" width="100px" src='https://www.logolynx.com/images/logolynx/49/4911bdf09e5ea0ec7c36b56f3e790c41.jpeg' alt='hi'/>
// <img height="80px" width="100px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/2000px-Pepsi_logo_2014.svg.png' alt='hi'/>
// <img height="80px" width="100px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png' alt='hi'/>
// <img height="80px" width="100px" src='https://cdn.worldvectorlogo.com/logos/oldspice.svg' alt='hi'/>
// </div>

// <div className="ui container">
// <UserPage
// currentUser={this.state.currentUser}
// foundIdea={this.state.foundIdea}
// addNewIdea={this.addNewIdea}
// deleteIdea={this.deleteIdea}/>
// </div>
