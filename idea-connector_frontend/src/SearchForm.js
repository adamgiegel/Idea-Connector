import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import { Card, Icon } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';
import IdeaDisplay from './IdeaDisplay'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'

class SearchForm extends Component {

  render() {
    return (
      <div class="row">
   <form class="col s12">
   <button onClick={this.props.handleNeedIdea} class='ui button'>DONE SEARCHING</button>
     <div class="row">
       <div class="input-field col s12">
         <textarea onChange={(e) => this.props.handleChangeSearch(e)} type="text" name="search" placeholder="Search by category" value={this.props.search} id="textarea1" class="materialize-textarea"></textarea>
         <label for="textarea1"></label>
       </div>
     </div>
   </form>
 </div>
    );
  }
}

export default SearchForm;
