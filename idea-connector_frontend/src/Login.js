import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserPage from './UserPage'
import CompanyPage from './CompanyPage'
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Navbar from './Navbar'
import { Carousel } from 'react-responsive-carousel';

class Login extends Component {
  state = {
    showSignUp: false,
    name: '',
    about: '',
    users: [],
    ideas: [],
    loggedIn: false,
    currentUser: '',
    open: true,
    username: '',
    password: '',
    foundIdea: '',
    newCarouselClick: true,
    about: '',
    backgroundImage: 'url("https://optinmonster.com/wp-content/uploads/2017/02/Blog-Post-Ideas-1.png")',
    value: '',
    clicked: true,
    shadup: true
  }

componentDidMount(){
  fetch('http://localhost:3000/api/v1/ideas')
  .then(response => response.json())
  .then(idea => {
    this.setState({
      ideas: idea
    })
  })
  fetch('http://localhost:3000/api/v1/users')
  .then(response => response.json())
  .then(user => {
    this.setState({
      users: user
    })
  })
}

  fetchSignUp = (e) => {
    e.preventDefault()
    if(this.state.value === "user"){
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify({
        "name": this.state.name,
        "about": this.state.about,
        "username": this.state.username,
        "password": this.state.password,
      })
    })
    .then(window.location.href = 'http://localhost:3001/dashboard')
  } else if (this.state.value === "company"){
    fetch('http://localhost:3000/api/v1/companies', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify({
        "name": this.state.name,
        "about": this.state.about,
        "username": this.state.username,
        "password": this.state.password,
      })
    })
    .then(window.location.href = 'http://localhost:3001/dashboard')
  }
}

handleSignUpDropdown=(event)=> {
    this.setState({value:event.target.value})
  }

  fetchUser = (username, password) => {
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
    }),
  })
  .then(res => res.json())
  .then(res => {
    if(res.error){
      alert(res.error)
    } else {
      console.log(this.state.loggedIn)
      this.setState({
        currentUser: res,
        loggedIn: true,
      })
      console.log(this.state.loggedIn)
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
      }),
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
      newCarouselClick: !this.state.newCarouselClick,
    }, console.log("fidea", this.state.foundIdea))
  }

  handleChange = (e) =>{
    if (e.target.name === 'name'){
      this.setState({
        name: e.target.value
      })
    } else if (e.target.name === 'about'){
      this.setState({
        about: e.target.value
      })
    } else if (e.target.name === 'username'){
      this.setState({
        username: e.target.value
      })
    } else if (e.target.name === 'password'){
      this.setState({
        password: e.target.value
      })
    }
  }

  handleSignUpButton = () => {
    this.setState({
      name: '',
      username: '',
      password: '',
      about: '',
      showSignUp: !(this.state.showSignUp)
    })
  }

  handleLogin =(e, username, password) => {//handles the login event and receives username and password from Login.js
    e.preventDefault()
    console.log(username, password)
    this.fetchUser(username, password)
  }

  handleLogout = () => {//sets the state of currentUser back to an empty string and loggedIn back to false
    this.setState({
      currentUser: '',
      loggedIn: false
    })
  }

  handleChangeDropdown=(event)=> {//handles the dropdown change in state
    console.log("event", event.target.value)
      this.setState({value:event.target.value})
    }


  aboutClick = () => {
    this.setState({
      shadup: !this.state.shadup
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    console.log(this.state.foundIdea)
    return(
      <div>
      <div className="App">
        {this.state.loggedIn ?
          this.state.value === "company" ?
            <CompanyPage
              ideas={this.props.ideas}
              clickedIdea={this.props.clickedIdea}
              clickedIdeaBack={this.props.clickedIdeaBack}
              handleClickedIdea={this.handleClickedIdea}
              handleChangeSearch={this.props.handleChangeSearch}
              search={this.props.search}
              foundIdea={this.state.foundIdea}
              newCarouselClick={this.state.newCarouselClick}
              ideaClick={this.props.ideaClick}
              goBack={this.props.goBack}
              likedIdea={this.props.likedIdea}
              updateIdeas={this.props.updateIdeas}
              users={this.state.users}
              companies={this.props.companies}
              currentUser={this.state.currentUser}
              newCompany={this.props.newCompany}
              open={this.state.open}
              onOpenModal={this.onOpenModal}
              onCloseModal={this.onCloseModal}/>
            :
          <div className="App">
            <UserPage
              clicked2={this.props.clicked2}
              deleteIdeaBack={this.props.deleteIdeaBack}
              ideas={this.state.ideas}
              foundIdea={this.props.foundIdea}
              addNewIdea={this.props.addNewIdea}
              deleteIdea={this.props.deleteIdea}
              currentUser={this.state.currentUser}/>
          </div>
        :
        <div>
        {this.state.showSignUp === false ?
          <div className="pic" style={{backgroundImage: 'url("https://digitalready.co/sites/default/files/styles/1000x427/public/best-innovative-and-creative-facebook-ads-from-famous-brands.jpg?itok=UB_QOW2l")'}}>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
          <br></br>
          <br></br>
        <div class="col s6">
          <div class="login card small">
          <Card>
            <form onSubmit={(e) => this.handleLogin(e, this.state.username, this.state.password)}>
            <div>
            <label></label>
              <select value={this.state.value} onChange={(event) => this.handleChangeDropdown(event)}class="browser-default">
                <option >ARE YOU A</option>
                <option value="user">USER</option>
                <option value="company">COMPANY</option>
              </select>
            </div>
              <label>
                Username:
                <input value={this.state.username} onChange={(e) => this.handleChange(e)} type="text" name="username" placeholder="user your username"/>
              </label>
              <label>
                Password:
                <input value={this.state.password} onChange={(e) => this.handleChange(e)} type="password" name="password"/>
              </label>
              <Button className="blue lighten-2">Submit</Button>
              </form>
              <br/>
              <Button className="blue lighten-2" onClick={this.handleSignUpButton}>SignUp</Button>
              </Card>
          </div>
          </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="pic" style={{backgroundImage: 'url("https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3045058-poster-p-1-4-strategies-for-introducing-new-ideas-at-work.jpg")'}}>
          </div>
          </div>
          :
          <Card>
            <form onSubmit={(e) => this.fetchSignUp(e)}>
            <div>
            <label></label>
              <select value={this.state.value} onChange={this.handleSignUpDropdown}class="browser-default">
                <option >ARE YOU A</option>
                <option value="user">USER</option>
                <option value="company">COMPANY</option>
              </select>
            </div>
            <label>
              Name or Company Name:
              <input value={this.state.name} onChange={(e) => this.handleChange(e)} type="text" name="name" placeholder="Name please"/>
            </label>
            <label>
              About:
              <input value={this.state.about} onChange={(e) => this.handleChange(e)} type="text" name="about" placeholder="Tell us about yourself or your company"/>
            </label>
              <label>
                Username:
                <input value={this.state.username} onChange={(e) => this.handleChange(e)} type="text" name="username" placeholder="What should we call you?"/>
              </label>
              <label>
                Password:
                <input value={this.state.password} onChange={(e) => this.handleChange(e)} type="password" name="password" placeholder='Make it secret.'/>
              </label>
              <Button className="blue lighten-2">Submit</Button>
            </form>
            <Button  className="blue lighten-2" onClick={this.handleSignUpButton}>Login Page</Button>
            <br/>
          </Card>
        }
        </div>
      }
      </div>
      </div>
    )
  }
}

export default Login


//inside render
// <div>
// <Row >
// <div>
// <h1 className="ideaConnector">IDEA CONNECTOR</h1>
// </div>
// {this.props.clickedIdea ?
// <div>
// <Card>
//     <Carousel className="carousel" infiniteLoop autoPlay height="1000px" width="900px" showThumbs={false}>
//       {
//         this.props.users.map(user => {
//           return user.ideas.map(idea => {
//             return (
//               <div onClick={() => this.props.handleClickedIdea(idea.id)} key={idea.id}>
//               <img height="400px" src={idea.image}/>
//               <p className="legend">{idea.description.substring(0, 100)}...</p>
//               </div>
//             )
//           })
//         })
//       }
//     </Carousel>
//     </Card>
// </div>
// :
// <Card>
// <div>
// {
//   this.props.foundIdea.map(idea => {
//     return (
//       <div>
//       <div>
//       <iframe height="300px" width="500px" src={idea.video}/>
//       <p class="flow-text grey-text text-darken-2">{idea.description}</p>
//       </div>
//       <div>
//       <Button className="blue lighten-2" onClick={this.props.clickedIdeaBack}>GO BACK</Button>
//       </div>
//       </div>
//     )
//   })
// }
// </div>
// </Card>
// }
//   <Col s={4}>
//   </Col>
//   <Col s={3} m={4}>
//     {
//     !this.state.shadup ?
//     <div>
//     <a onClick={this.aboutClick} class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">arrow_back</i></a>
//     {this.state.showSignUp === false ? this.loginForm() : this.signUpForm()}
//     </div>
//     :
//     <div>
//     <Card>
//     <h1 className="about">ABOUT</h1>
//     <p className="aboutWords">HAVE YOU EVER HAD A GOOD IDEA AND WANTED TO PITCH IT TO A COMPANY BUT DIDNT KNOW HOW?</p>
//
//     <p className="aboutWords">OR ARE YOU A COMPANY THAT NEEDS AN IDEA BUT CAN'T COME UP WITH ONE?</p>
//
//     <p className="aboutWords">WE CONNECT ADVERTISERS WITH COMPANIES.  YOU SUBMIT AN IDEA AND IF A COMPANY LIKES IT THEY OFFER YOU SOME COLD HARD CASH</p>
//     <Button onClick={this.aboutClick}>LOG IN</Button>
//     </Card>
//     </div>
//   }
//   </Col>
// </Row>
// </div>


// aboutClick = () => {
//   this.setState({
//     shadup: !this.state.shadup
//   })
// }
//
// <div className="App">
//   <Login
//       handleChangeDropdown={this.handleChangeDropdown}
//       handleLogin={this.handleLogin}
//       value={this.state.value}
//       users={this.state.users}
//       foundIdea={this.state.foundIdea}
//       handleClickedIdea={this.handleClickedIdea}
//       clickedIdea={this.state.clickedIdea}
//       clickedIdeaBack={this.clickedIdeaBack}/>
// </div>
