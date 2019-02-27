import React, { Component } from 'react';
import './App.css';
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Login from './Login'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IdeaDisplay from './IdeaDisplay'
import UserPage from './UserPage'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import './App.css';


const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

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
    ideas: [],
    firstIndex: 0,
    lastIndex: 2,
    selected: 'item1',
    clicked: false,
    foundIdea: '',
    loggedIn: false,
    currentUser: null,
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
}

fetchUser(username, password){
  fetch('http://localhost:3000/api/v1/login', {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({
      "username": username,
      "password": password
    }),
    redirect: "follow"
  })
  .then(res => res.json())
  .then(res => this.setState({
    currentUser: res,
    loggedIn: true,
  }, () => console.log(this.state.currentUser)))
}

newIdea = (id, title, image, video, song, description) => {
    let ideaCopy = [...this.state.ideas]
    const ideaIdx = ideaCopy.findIndex(idea => idea.id === id)
    const idea = {...ideaCopy[ideaIdx]}
    idea.title = title
    idea.image = image
    idea.video = video
    idea.song = song
    idea.description = description
    ideaCopy[ideaIdx] = idea
    this.setState({
      idea: ideaCopy,
    })
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
    currentUser: {}
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
    clicked: !this.state.clicked
  })
}




dashBoardComponents(){
      return (
      <div>
      <div className="App">
      <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} clicked={this.state.clicked} handleClick={this.handleClick}/>
      </div>
      <div>
      <Carousel infiniteLoop autoPlay width="900px" showThumbs={false}>
      {
        this.state.users.slice(0, 4).map(user => {
          return user.ideas.map(idea => {
            return (
              <div>
              <img height="400px" src={idea.image}/>
              <p className="legend">{idea.description.substring(0, 100)}...</p>
              <div key={idea.id} onClick={() => this.foundIdea(idea.id)}>
              </div>
              </div>
            )
          })
        })
      }
      </Carousel>
      </div>

      <div className="ui container">
      <UserPage currentUser={this.state.currentUser} foundIdea={this.state.foundIdea}/>
      </div>
      <br/>
      <div>
      </div>
      <div className='logos'>
      <img height="80px" width="100px" src='http://logok.org/wp-content/uploads/2014/04/Apple-logo-grey-880x625.png' alt='hi'/>
      <img height="80px" width="100px" src='https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png' alt='hi'/>
      <img height="80px" width="100px" src='https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wxii/33040582-anheuser-busch-logo-jpg.jpg?crop=1xw:1.00000000000000000xh;center,top&resize=640:*' alt='hi'/>
      <img height="80px" width="100px" src='https://www.logolynx.com/images/logolynx/49/4911bdf09e5ea0ec7c36b56f3e790c41.jpeg' alt='hi'/>
      <img height="80px" width="100px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/2000px-Pepsi_logo_2014.svg.png' alt='hi'/>
      <img height="80px" width="100px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png' alt='hi'/>
      <img height="80px" width="100px" src='https://cdn.worldvectorlogo.com/logos/oldspice.svg' alt='hi'/>
      </div>
      </div>
    )
}

dashBoardRoute(){
if (this.state.loggedIn === true){
  return <Route path="/dashboard" render={() => this.dashBoardComponents()} />
} else {
  return <Redirect to="/" />
}
}

render() {
  console.log(this.state.currentUser)
  return (
    <Router>
      <div className="App">
      <div>
      </div>
        <Route exact path="/" render={()=>(
          this.state.loggedIn ? (<Redirect to="/dashboard"/>) : (<Login handleLogin={this.handleLogin}/>)
        )} />
        {this.dashBoardRoute()}
      </div>
    </Router>
  );
}

}



export default HomePage;

// <div className="ui container">
//
// <div>
// <Card
// image='https://media.giphy.com/media/RLUPuPHz1uqd5rJEFa/giphy.gif'
// description="NEED AN IDEA?"
// />
// </div>
// </div>
// <br/>
