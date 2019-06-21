import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login.js'
import HomePage from './HomePage.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';


class App extends Component {

  state = {
      users: [],
      loginPage: true,
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
      open: true,
      newCarouselClick: true,
      showSignUp: false,
      name: '',
      about: '',
      loggedIn: false,
      username: '',
      password: '',
      about: '',
      value: '',
      clicked: true,
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


  clickedIdeaBack = () => {//to set the state of clickedIdea to the opposite of what the state is...used in Carousel
    this.setState({
      newCarouselClick: !this.state.newCarouselClick
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



  aboutClick = () => {
    this.setState({
      shadup: !this.state.shadup
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
      newCarouselClick: !this.state.newCarouselClick,
    }, console.log("found Idea", this.state.foundIdea))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" render={(routeProps) => (<HomePage {...routeProps}
            users={this.state.users}
            loginPage={this.state.loginPage}
            newCarouselClick={this.state.newCarouselClick}
            handleClickedIdea={this.handleClickedIdea}
            open={this.state.open}
            onOpenModal={this.onOpenModal}
            onCloseModal={this.onCloseModal}
            foundIdea={this.state.foundIdea}
            clickedIdeaBack={this.clickedIdeaBack}
            />)}/>
          <Route path="/login" render={(routeProps) => (<Login {...routeProps}
            users={this.state.users}
            loggedIn={this.state.loggedIn}
            value={this.state.value}
            showSignUp={this.state.showSignUp}
            handleLogin={this.handleLogin}
            username={this.state.username}
            password={this.state.password}
            value={this.state.value}
            handleChangeDropdown={this.handleChangeDropdown}
            handleChange={this.handleChange}
            handleSignUpButton={this.handleSignUpButton}
            fetchSignUp={this.fetchSignUp}
            handleSignUpDropdown={this.handleSignUpDropdown}
            about={this.state.about}/>)}
            />
          <nav class="nav-wrapper">
            <div>
            <SocialIcon url="https://www.linkedin.com/in/adam-giegel-ba5579a6/" style={{ height: 40, width: 40 }} bgColor="white" target="_blank"/>{' '}
            <SocialIcon url="https://medium.com/@adamgiegel" style={{ height: 40, width: 40 }} network="medium" bgColor="white" target="_blank"/>{'  '}
            <SocialIcon url="https://github.com/adamgiegel" style={{ height: 40, width: 40 }} network="github" bgColor="white" target="_blank"/>{'  '}
              <ul id="nav-mobile" class="right hide-on-med-and-down">
              <ul>
                <li>
                  <Link class="intro" to="/">HOME</Link>
                </li>
                <li>
                  <Link class="intro" to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link class="intro" to="/login">LOGIN</Link>
                </li>
                <li>
                  <Link class="intro" to="/contact">CONTACT ME</Link>
                </li>
              </ul>
              </ul>
            </div>
          </nav>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
