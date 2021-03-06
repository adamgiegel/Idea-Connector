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


  render(){
    return(
      <div>
      <div className="App">
        {this.props.loggedIn ?
          this.props.value === "company" ?
            <CompanyPage
              ideas={this.props.ideas}
              clickedIdea={this.props.clickedIdea}
              clickedIdeaBack={this.props.clickedIdeaBack}
              handleClickedIdea={this.props.handleClickedIdea}
              handleChangeSearch={this.props.handleChangeSearch}
              search={this.props.search}
              foundIdea={this.props.foundIdea}
              findIdea={this.props.findIdea}
              newCarouselClick={this.props.newCarouselClick}
              ideaClick={this.props.ideaClick}
              goBack={this.props.goBack}
              likedIdea={this.props.likedIdea}
              updateIdeas={this.props.updateIdeas}
              users={this.props.users}
              companies={this.props.companies}
              currentUser={this.props.currentUser}
              newCompany={this.props.newCompany}
              open1={this.props.open1}
              onOpenModal={this.props.onOpenModal}
              onCloseModal={this.props.onCloseModal}/>
            :
          <div className="App">
            <UserPage
              open1={this.props.open1}
              onOpenModal={this.props.onOpenModal}
              onCloseModal={this.props.onCloseModal}
              clicked2={this.props.clicked2}
              deleteIdeaBack={this.props.deleteIdeaBack}
              ideas={this.props.ideas}
              foundIdea={this.props.foundIdea}
              addNewIdea={this.props.addNewIdea}
              deleteIdea={this.props.deleteIdea}
              users={this.props.users}
              currentUser={this.props.currentUser}/>
          </div>
        :
        <div>
        {this.props.showSignUp === false ?
          <div className="pic3" style={{backgroundImage: 'url("https://d3nuqriibqh3vw.cloudfront.net/styles/aotw_detail_ir/s3/images/tabaconomia2.jpg?itok=oi7YKCdm")'}}>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
          <br></br>
          <br></br>
        <div class="col s6">
          <div class="login card small">
          <Card>
            <form onSubmit={(e) => this.props.handleLogin(e, this.props.username, this.props.password)}>
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
                <input value={this.props.username} onChange={(e) => this.props.handleChange(e)} type="text" name="username" placeholder="user your username"/>
              </label>
              <label>
                Password:
                <input value={this.props.password} onChange={(e) => this.props.handleChange(e)} type="password" name="password"/>
              </label>
              <Button className="blue lighten-2">Submit</Button>
              </form>
              <br/>
              <Button className="blue lighten-2" onClick={this.props.handleSignUpButton}>SignUp</Button>
              </Card>
          </div>
          </div>
          </div>
          </div>
          :
          <Card>
            <form onSubmit={(e) => this.props.fetchSignUp(e)}>
            <div>
            <label></label>
              <select value={this.props.value} onChange={this.props.handleSignUpDropdown}class="browser-default">
                <option >ARE YOU A</option>
                <option value="user">USER</option>
                <option value="company">COMPANY</option>
              </select>
            </div>
            <label>
              Name or Company Name:
              <input value={this.props.name} onChange={(e) => this.props.handleChange(e)} type="text" name="name" placeholder="Name please"/>
            </label>
            <label>
              About:
              <input value={this.props.about} onChange={(e) => this.props.handleChange(e)} type="text" name="about" placeholder="Tell us about yourself or your company"/>
            </label>
              <label>
                Username:
                <input value={this.props.username} onChange={(e) => this.props.handleChange(e)} type="text" name="username" placeholder="What should we call you?"/>
              </label>
              <label>
                Password:
                <input value={this.props.password} onChange={(e) => this.props.handleChange(e)} type="password" name="password" placeholder='Make it secret.'/>
              </label>
              <Button className="blue lighten-2">Submit</Button>
            </form>
            <Button  className="blue lighten-2" onClick={this.props.handleSignUpButton}>Login Page</Button>
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
