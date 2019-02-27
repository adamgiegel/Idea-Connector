import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class UserForm extends Component {



  render() {
    return (
    <form>
      <div className="ui form">
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name"/>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name"/>
        </div>
        <div class="field">
          <label>Idea Name</label>
          <input type="text" name="idea-name" placeholder="Idea Name"/>
        </div>
        <div class="field">
          <label>Video Link</label>
          <input type="text" name="video-link" placeholder="Video Link"/>
        </div>
        <div class="field">
          <label>Song Link</label>
          <input type="text" name="song-link" placeholder="Song Link"/>
        </div>
        <div class="field">
          <label>Image Link</label>
          <input type="text" name="image-link" placeholder="Image Link"/>
        </div>
        <div class="field">
            <label>Description</label>
            <textarea></textarea>
        </div>
        <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden"/>
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
          <button class="ui button" type="submit">Submit</button>
  </div>
</form>

    );
  }
}




export default UserForm;
