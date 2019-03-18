import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Login extends Component {
  state = {
    showSignUp: false,
    name: '',
    about: '',
    username: '',
    password: '',
    about: '',
    backgroundImage: 'url("https://optinmonster.com/wp-content/uploads/2017/02/Blog-Post-Ideas-1.png")',
    value: '',
    clicked: true,
    shadup: true
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


  loginForm(){
    return(
      <Card className="login">
        <form onSubmit={(e) => this.props.handleLogin(e, this.state.username, this.state.password)}>
        <div>
        <label></label>
          <select value={this.props.value} onChange={(event) => this.props.handleChangeDropdown(event)}class="browser-default">
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
    )
  }

  signUpForm(){
    return (
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
    )
  }

  aboutClick = () => {
    this.setState({
      shadup: !this.state.shadup
    })
  }

  render(){

    return(
      <div style={{backgroundImage: this.state.backgroundImage}}>
      <Row >
      <div>
      <h1 className="ideaConnector">IDEA CONNECTOR</h1>
      </div>
      {this.props.clickedIdea ?
      <div>
      <Card>
          <Carousel className="carousel" infiniteLoop autoPlay height="1000px" width="900px" showThumbs={false}>
            {
              this.props.users.map(user => {
                return user.ideas.map(idea => {
                  return (
                    <div onClick={() => this.props.handleClickedIdea(idea.id)} key={idea.id}>
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
      :
      <Card>
      <div>
      {
        this.props.foundIdea.map(idea => {
          return (
            <div>
            <div>
            <iframe height="300px" width="500px" src={idea.video}/>
            <p class="flow-text grey-text text-darken-2">{idea.description}</p>
            </div>
            <div>
            <Button className="blue lighten-2" onClick={this.props.clickedIdeaBack}>GO BACK</Button>
            </div>
            </div>
          )
        })
    }
      </div>
      </Card>
    }
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
    )
  }
}

export default Login
