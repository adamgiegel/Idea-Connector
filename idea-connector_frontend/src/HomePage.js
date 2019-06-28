import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import UserPage from './UserPage'
import CompanyPage from './CompanyPage'
import idea from './Ideas.jpg'
import Navbar from './Navbar'
import Modal from 'react-responsive-modal';
import NewCarousel from './NewCarousel.js'
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'


class HomePage extends Component {


render() {
  return (
    <div>
    <div>
    <div className="pic" style={{backgroundImage: 'url("https://www.bloopanimation.com/wp-content/uploads/2013/07/finding-story-ideas-1103x575.jpg")'}}>
    <br></br>
    <h1 className="ideaConnector">IDEA CONNECTOR</h1>
    </div>
    <div className="pic" style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
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
    <div className="pic" style={{backgroundImage: 'url("https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3045058-poster-p-1-4-strategies-for-introducing-new-ideas-at-work.jpg")'}}>
    <h1 className="about">ABOUT</h1>
        <h3 className="aboutWords">HAVE YOU EVER HAD A GOOD IDEA AND WANTED TO PITCH IT TO A COMPANY BUT DIDNT KNOW HOW?</h3>
        <h3 className="aboutWords">OR ARE YOU A COMPANY THAT NEEDS AN IDEA BUT CAN'T COME UP WITH ONE?</h3>
        <h3 className="aboutWords">CONNECT ADVERTISERS WITH COMPANIES.  YOU SUBMIT AN IDEA AND IF A COMPANY LIKES IT THEY OFFER YOU SOME COLD HARD CASH</h3>
        <h3 className="aboutWords">Annually, over $500 billion is spent on advertising globally.</h3>
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
