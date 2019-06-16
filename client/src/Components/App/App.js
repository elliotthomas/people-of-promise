import React, { Component } from 'react';
import './App.css';
import AddInfo from '../AddInfo/AddInfo'
import Maps from '../Maps/Maps'
import Timeline from '../Timeline/Timeline'
import Tiles from '../Tiles/Tiles'
import TitlePerson from '../TitlePerson/TitlePerson'
import Gallery from '../Gallery/Gallery'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'

class App extends Component {

  state = {
    email: "",
    password: "",
    auth: false,
    validated: false,
    header: false,
    showCalander: true,
    dateToSend: '',
    nameToSend: ''
  };

  componentDidMount() {
    this.getAllPeople()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  getAllPeople = async () => {
    const response = await fetch('/api/people');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  getOnePerson = async () => {
    const response = await fetch('/api/onePerson')
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  checkUser = async event => {
    const objectToSend = {
      user: this.state.email,
      password: this.state.password
    }
      event.preventDefault();
      const response = await fetch('/api/checkUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postUser: objectToSend }),
      });
      const body = await response.text();
      console.log(typeof body)
      if(body === 'true') {
        this.setState({
          auth: true,
          tryAgain: false
        });
      } else {
        this.setState({
          tryAgain: true
        });
      }
      }

      clickLink = (event) => {
        this.setState({
          dateToSend: event.currentTarget.getAttribute('data-value'),
          header: true,
          showCalander: false
        })
    }

    clickLinkName = (event) => {
      this.setState({
        nameToSend: event.currentTarget.getAttribute('data-value'),
        header: true,
        showCalander: false
      })
  }

    goToCalendar = () => {
      this.setState({
        showCalander: true,
        header: false
      })
    }

    hideImage = () => {
      this.setState({
        showCalander: false
      });
    }


render() {
    return (
      <Router>
      <div className="App">
        <header className={this.state.auth  && this.state.header ? "App-header" : 'hidden' }>
        <Link onClick = {this.goToCalendar} className = "link-options" to = '/'>Home</Link>
        <Link className = "link-options" to = '/tiles'>Calendar</Link>
        <Link className = "link-options" to = '/maps'>Maps</Link>
        <Link className = "link-options" to = '/familyTree'>Family Tree</Link>
        <Link className = "link-options" to = '/timeline'>Timeline</Link>
        <Link className = "link-options" to = '/gallery'>Gallery</Link>
        <Link className = "link-options" to = '/youth'>Youth</Link>
        <Link className = "link-options" to = '/addInfo'>Admin Page</Link>
        </header>
        <div className= {this.state.auth ? "hidden" : 'Login'}>
      <h1>Website Coming Soon...</h1>
        <Form 
        onSubmit={this.checkUser}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              User is incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            <Form.Control.Feedback type="invalid">
              Password is incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>

        </Form>
      </div>
      <Link style={{ textDecoration: 'none', color: 'black' }} to = '/tiles' onClick={this.hideImage}>
      <h1 className ={this.state.auth && this.state.showCalander ? 'welcome-text' : "hidden"}>Welcome to</h1>
      <div className ={this.state.auth && this.state.showCalander ? 'welcome-image contain-image' : "hidden"}>
       </div>
       <h1 className ={this.state.auth && this.state.showCalander ? 'welcome-text' : "hidden"}>Click anywhere to enter this site</h1>
       </Link>
        <Route 
         path = '/addInfo' render = {() => (this.state.auth ? <AddInfo /> : <Redirect to = '/'/>)}
        />
        <Route 
        path = '/maps' render = {() => (this.state.auth ? <Maps name = {this.state.nameToSend}/> : <Redirect to = '/'/>)}
        />
        <Route 
        path = '/timeline' render = {() => (this.state.auth ? <Timeline name = {this.state.nameToSend}/> : <Redirect to = '/'/>)}
        />
        <Route 
        path = '/gallery' render = {() => (this.state.auth ? <Gallery name = {this.state.nameToSend}/> : <Redirect to = '/'/>)}
        />
        <Route 
        path = '/tiles' render = {() => (this.state.auth ? <Tiles clickLink ={this.clickLink}/> : <Redirect to = '/'/>)}
        />
                <Route 
        path = '/titlePerson' render = {() => (this.state.auth ? <TitlePerson clickLink ={this.clickLinkName} date = {this.state.dateToSend}/> : <Redirect to = '/'/>)}
        />
      </div>
      </Router>
    );
  }
}

export default App;
