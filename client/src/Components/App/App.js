import React, { Component } from 'react';
import './App.css';
import AddInfo from '../AddInfo/AddInfo'
import Maps from '../Maps/Maps'
import Lesson from '../Lesson/Lesson'
import Study from '../Study/Study'
import Timeline from '../Timeline/Timeline'
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
    dateToSend: ''
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


render() {
    return (
      <Router>
      <div className="App">
        <header className={this.state.auth  && this.state.header ? "App-header" : 'hidden' }>
        <Link className = "link-options" to = '/lesson'>Lesson</Link>
        <Link className = "link-options" to = '/maps'>Maps</Link>
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
      <div className ={this.state.auth && this.state.showCalander ? 'calendar cover-image' : "hidden"}>
                <a onClick={this.clickLink} data-value = '2019-09-08' href= '#lesson' className = 'calendar-link day-1'>September 8</a>
                <a onClick={this.clickLink} data-value = '2019-09-15' href= '#lesson' className = 'calendar-link day-2'>September 15</a>
                <a onClick={this.clickLink} data-value = '2019-09-22' href= '#lesson' className = 'calendar-link day-3'>September 22</a>
                <a onClick={this.clickLink} data-value = '2019-09-29' href= '#lesson' className = 'calendar-link day-4'>September 29</a>
                <a onClick={this.clickLink} data-value = '2019-10-06' href= '#lesson' className = 'calendar-link day-5'>October 6</a>
                <a onClick={this.clickLink} data-value = '2019-10-13' href= '#lesson' className = 'calendar-link day-6'>October 13</a>
                <a onClick={this.clickLink} data-value = '2019-10-20' href= '#lesson' className = 'calendar-link day-7'>October 20</a>
                <a onClick={this.clickLink} data-value = '2019-10-27' href= '#lesson' className = 'calendar-link day-8'>October 27</a>
                <a onClick={this.clickLink} data-value = '2019-11-03' href= '#lesson' className = 'calendar-link day-9'>November 3</a>
                <a onClick={this.clickLink} data-value = '2019-11-10' href= '#lesson' className = 'calendar-link day-10'>November 10</a>
                <a onClick={this.clickLink} data-value = '2019-11-17' href= '#lesson' className = 'calendar-link day-11'>November 17</a>
                <a onClick={this.clickLink} data-value = '2019-11-24' href= '#lesson' className = 'calendar-link day-12'>November 24</a>
                <a onClick={this.clickLink} data-value = '2019-12-01' href= '#lesson' className = 'calendar-link day-13'>December 1</a>
                <a onClick={this.clickLink} data-value = '2019-12-08' href= '#lesson' className = 'calendar-link day-15'>December 8</a>
                <a onClick={this.clickLink} data-value = '2019-12-15' href= '#lesson' className = 'calendar-link day-16'>December 15</a>
                <a onClick={this.clickLink} data-value = '2019-12-22' href= '#lesson' className = 'calendar-link day-17'>December 22</a>
                <a onClick={this.clickLink} data-value = '2019-12-29' href= '#lesson' className = 'calendar-link day-18'>December 29</a>
                <a onClick={this.clickLink} data-value = '2020-01-05' href= '#lesson' className = 'calendar-link day-19'>January 5</a>
                <a onClick={this.clickLink} data-value = '2020-01-12' href= '#lesson' className = 'calendar-link day-20'>January 12</a>
                <a onClick={this.clickLink} data-value = '2020-01-19' href= '#lesson' className = 'calendar-link day-21'>January 19</a>
                <a onClick={this.clickLink} data-value = '2020-01-26' href= '#lesson' className = 'calendar-link day-22'>January 26</a>
                <a onClick={this.clickLink} data-value = '2020-02-02' href= '#lesson' className = 'calendar-link day-23'>February 2</a>
                <a onClick={this.clickLink} data-value = '2020-02-09' href= '#lesson' className = 'calendar-link day-24'>February 9</a>
                <a onClick={this.clickLink} data-value = '2020-02-16' href= '#lesson' className = 'calendar-link day-25'>February 16</a>
                <a onClick={this.clickLink} data-value = '2020-02-23' href= '#lesson' className = 'calendar-link day-26'>February 23</a>
                <a onClick={this.clickLink} data-value = '2020-03-01' href= '#lesson' className = 'calendar-link day-27'>March 1</a>
                <a onClick={this.clickLink} data-value = '2020-03-08' href= '#lesson' className = 'calendar-link day-28'>March 8</a>
                <a onClick={this.clickLink} data-value = '2020-03-15' href= '#lesson' className = 'calendar-link day-29'>March 15</a>
                <a onClick={this.clickLink} data-value = '2020-03-22' href= '#lesson' className = 'calendar-link day-30'>March 22</a>
                <a onClick={this.clickLink} data-value = '2020-03-29' href= '#lesson' className = 'calendar-link day-31'>March 29</a>
                <a onClick={this.clickLink} data-value = '2020-04-05' href= '#lesson' className = 'calendar-link day-32'>April 5</a>
                <a onClick={this.clickLink} data-value = '2020-04-12' href= '#lesson' className = 'calendar-link day-33'>April 12</a>
                <a onClick={this.clickLink} data-value = '2020-04-19' href= '#lesson' className = 'calendar-link day-34'>April 19</a>
                <a onClick={this.clickLink} data-value = '2020-04-26' href= '#lesson' className = 'calendar-link day-35'>April 26</a>
                <a onClick={this.clickLink} data-value = '2020-05-03' href= '#lesson' className = 'calendar-link day-36'>May 3</a>
                <a onClick={this.clickLink} data-value = '2020-05-10' href= '#lesson' className = 'calendar-link day-37'>May 10</a>
                <a onClick={this.clickLink} data-value = '2020-05-17' href= '#lesson' className = 'calendar-link day-38'>May 17</a>
          </div>
        <Route 
         path = '/addInfo' render = {() => (this.state.auth ? <AddInfo /> : <Redirect to = '/'/>)}
        />
        <Route 
        path = '/maps' render = {() => (this.state.auth ? <Maps /> : <Redirect to = '/'/>)}
        />
        <Route 
        path = '/lesson' render = {() => (this.state.auth ? <Lesson date = {this.state.dateToSend}/> : <Redirect to = '/'/>)}
        />
        <Route 
        path = '/timeline' render = {() => (this.state.auth ? <Timeline/> : <Redirect to = '/'/>)}
        />
      </div>
      </Router>
    );
  }
}

export default App;
