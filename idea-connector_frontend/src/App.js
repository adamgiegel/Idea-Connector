import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import HomePage from './HomePage'
import UserPage from './UserPage'
import Login from './Login'
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}



export default App;

// state = {
//   clicked: false,
//   currentUser: null,
//   loggedIn: false,
// }
//
// fetchUser(username, password){
//   fetch('http://localhost:3000/api/v1/login', {
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body:JSON.stringify({
//       "username": username,
//       "password": password
//     }),
//     redirect: "follow"
//   })
//   .then(res => res.json())
//   .then(res => this.setState({
//     currentUser: res,
//     loggedIn: true,
//   }, () => console.log(this.state.currentUser)))
// }
//
// handleClick = () => {
// this.setState({
//   clicked: true
// })
// }
//
// handleLogin =(e, username, password) => {
//   e.preventDefault()
//   this.fetchUser(username, password)
// }
//
// handleLogout = () => {
//   this.setState({
//     currentUser: {}
//   })
// }
//
// dashBoardComponents(){
//   return(
//     <div className="App">
//       <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} clicked={this.state.clicked} handleClick={this.handleClick}/>
//     <HomePage currentUser={this.state.currentUser}/>
//     </div>
//   )
// }
//
// dashBoardRoute(){
// if (this.state.loggedIn === true){
//   return <Route path="/dashboard" render={() => this.dashBoardComponents()} />
// } else {
//   return <Redirect to="/" />
// }
// }
//
// render() {
//   return (
//     <Router>
//       <div className="App">
//         <Route exact path="/" render={()=>(
//           this.state.loggedIn ? (<Redirect to="/dashboard"/>) : (<Login handleLogin={this.handleLogin}/>)
//         )} />
//         {this.dashBoardRoute()}
//       </div>
//     </Router>
//   );
// }
// }
