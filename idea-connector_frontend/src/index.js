import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login.js'
import HomePage from './HomePage.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
    <nav>
      <div class="nav-wrapper">
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
      <Route exact path="/" component={App} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
