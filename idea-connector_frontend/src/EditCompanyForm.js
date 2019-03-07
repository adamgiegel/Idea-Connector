import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class EditCompanyForm extends Component {

  state = {
    id: this.props.currentUser.id,
    name: this.props.currentUser.name,
    about: this.props.currentUser.about,
    email: this.props.currentUser.email,
    contact: this.props.currentUser.contact,
  }

handleSubmit = (e, name, about, email, contact, id) => {
  e.preventDefault()
  fetch(`http://localhost:3000/api/v1/companies/${id}` ,{
    method: 'PATCH',
           headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'},
           body: JSON.stringify({
               name: name,
               about: about,
               email: email,
               contact: contact,
           })
  }).then(res=> res.json())
  .then(idea => {
    this.props.newCompany(id, name, about, email, contact)
})
    this.setState({
      name: '',
      about: '',
      email: '',
      contact: '',
    })
}



handleChangeForm = (e) => {
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  })
}



  render() {
    return (
    <form onSubmit={(e) => this.handleSubmit(e, this.state.name, this.state.about, this.state.email, this.state.contact, this.props.currentUser.id)}>
      <div className="editForm">
        <div class="field">
          <label>Name</label>
          <input onChange={this.handleChangeForm} type="text" name="name" placeholder="Name" value={this.state.name}/>
        </div>
        <div class="field">
          <label>About</label>
          <input onChange={this.handleChangeForm} type="text" name="about" placeholder="About" value={this.state.about}/>
        </div>
        <div class="field">
          <label>Email</label>
          <input onChange={this.handleChangeForm} type="text" name="email" placeholder="Email" value={this.state.email}/>
        </div>
        <div class="field">
          <label>Contact</label>
          <input onChange={this.handleChangeForm} type="text" name="contact" placeholder="Contact" value={this.state.contact}/>
        </div>
          <button class="ui button" type="submit">Submit</button>
          <button onClick={this.props.handleAboutClick} class='ui button'>GO BACK</button>
  </div>
</form>

    );
  }
}



export default EditCompanyForm;

// state = {
//   id: this.props.foundNote.id,
//   title: this.props.foundNote.title,
//   body: this.props.foundNote.body,
// }
//
// handleChange = (e) => {
//     this.setState({
//        [e.target.name]: e.target.value
//     })
// }
//
// handleSubmit = (e, title, body, id) => {
//   e.preventDefault();
//   fetch(`http://localhost:3000/api/v1/notes/${id}`, {
//     method: "PATCH",
//     headers: {
//        "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         title: title,
//         body: body,
//     })
//   })
//     .then(response => response.json())
//     .then(editNote => {
//           this.props.newNote(id, title, body)
//   })
//   this.setState({
//     title: "",
//     body: '',
//   })
//
// }
//
//
// cancelButton = () => {
// this.setState({
//   title: this.props.foundNote.title,
//   body: this.props.foundNote.body
// })
// }
//
// render() {
//   return (
//     <form onSubmit={(e) => this.handleSubmit(e, this.state.title, this.state.body, this.props.foundNote.id)}id={this.props.notesData.id} className="note-editor">
//       <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)}/>
//       <textarea name="body" value={this.state.body} onChange={(e) => this.handleChange(e)}/>
//       <div className="button-row">
//         <input  className="button" type="submit" value="Save" />
//         <button onClick={this.cancelButton} type="button">Cancel</button>
//       </div>
//     </form>
//   );
// }
// }
