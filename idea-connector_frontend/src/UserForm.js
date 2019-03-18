import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class UserForm extends Component {

  state = {
    title: '',
    image: '',
    video: '',
    song: '',
    description: '',
    category: '',
    userId: this.props.currentUser.id
  }

handleSubmit = (e) => {
  e.preventDefault()
  const title = this.state.title
  const image = this.state.image
  const video = this.state.video
  const song = this.state.song
  const description = this.state.description
  const category = this.state.category
  const userId = this.props.currentUser.id
  fetch('http://localhost:3000/api/v1/ideas' ,{
    method: 'POST',
           headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'},
           body: JSON.stringify({
               title: title,
               image: image,
               video: video,
               song: song,
               description: description,
               category: category,
               user_id: userId,
               offer_id: 2
           })
  }).then(res=> res.json())
  .then(idea => {
    this.props.addNewIdea(idea)
    this.setState({
    title: '',
    image: '',
    video: '',
    song: '',
    description: '',
    category: '',
  }, this.props.handleFormBack)})


}

handleChangeForm = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}



  render() {
    return (
    <form onSubmit={(e) => this.handleSubmit(e)}>
      <div className="ui form">
        <div class="field">
          <label>Idea Name</label>
          <input onChange={this.handleChangeForm} type="text" name="title" placeholder="Idea Name" value={this.state.title}/>
        </div>
        <div class="field">
          <label>Video Link</label>
          <input onChange={this.handleChangeForm} type="text" name="video" placeholder="Video Link" value={this.state.video}/>
        </div>
        <div class="field">
          <label>Song Link</label>
          <input onChange={this.handleChangeForm} type="text" name="song" placeholder="Song Link" value={this.state.song}/>
        </div>
        <div class="field">
          <label>Image Link</label>
          <input onChange={this.handleChangeForm} type="text" name="image" placeholder="Image Link" value={this.state.image}/>
        </div>
        <div class="field">
            <label>Description</label>
            <textarea onChange={this.handleChangeForm} type="text" name="description" value={this.state.description}></textarea>
        </div>
        <div class="field">
            <label>Category</label>
            <textarea onChange={this.handleChangeForm} type="text" name="category" value={this.state.category}></textarea>
        </div>
        <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden"/>
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
          <button class="ui button" type="submit">Submit</button>
          <button onClick={this.props.handleFormBack} class='ui button'>Changed My Mind</button>
  </div>
</form>

    );
  }
}



export default UserForm;
