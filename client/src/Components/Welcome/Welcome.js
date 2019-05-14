import React, { Component } from 'react';
import './Welcome.css';
import Tiles from '../Tiles/Tiles'
import { HashRouter as Router,Link, Route, Redirect} from 'react-router-dom'

class Welcome extends Component {

  state = {
  }

  render() {
    return (
        <div>
            <a style={{ textDecoration: 'none', color: 'black' }} href = '#/tiles'>
            <h1 className= "welcome-pop">Welcome to People of Promise</h1>
            </a>
    </div>
    );
  }
}

export default Welcome;