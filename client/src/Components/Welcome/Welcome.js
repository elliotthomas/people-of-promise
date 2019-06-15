import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {

  state = {
  }

  render() {
    return (
        <div>
            <a style={{ textDecoration: 'none', color: 'black' }} href = '#/tiles'>
            <h1 className= "welcome-pop">Welcome to People of Promise</h1>
            <p className = "welcome-intro">Welcome to this week’s People of Promise! You are invited to dig into the rich resources provided by this online platform. Please explore the menu bar above and check out the tools that will help give context to this week's Lesson. The Timeline, the Family Tree and Maps are useful to set the promise in context. Also enter the Gallery each week and let the various works of art open your eyes to new insights to understand the message of the passage. </p>
            </a>
    </div>
    );
  }
}

export default Welcome;