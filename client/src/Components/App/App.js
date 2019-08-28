import React, { Component } from 'react';
import './App.css';
import AddInfo from '../AddInfo/AddInfo'
import Maps from '../Maps/Maps'
import Timeline from '../Timeline/Timeline'
import Tiles from '../Tiles/Tiles'
import TitlePerson from '../TitlePerson/TitlePerson'
import Gallery from '../Gallery/Gallery'
import GalleryPics from '../GalleryPics/GalleryPics'
import IntroPerson from '../IntroPerson/IntroPerson'
import Print from '../Print/Print'
import Index from '../Index/Index'
import FamilyTree from '../FamilyTree/FamilyTree'
import Welcome from '../Welcome/Welcome'
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
    nameToSend: '',
    zIndex: 1
  };

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

    goToTiles = () => {
      this.setState({
        showCalander: false,
        header: false
      })
    }

    hideImage = () => {
      this.setState({
        showCalander: false
      });
    }

    changeZindexShow = () => {
      this.setState({
        zIndex: 1
      });
    }

    changeZindexHide = () => {
      this.setState({
        zIndex: 0
      });
    }

    setHeaderToFalse = () => {
      this.setState({
        header: false
      });
    }






render() {
  window.onpopstate  = (e) => {
    return <Redirect to='/' />
 }
    return (
      <Router>
      <div className="App">
        <header style={{ zIndex: `${this.state.zIndex}` }} className={this.state.header ? "App-header" : 'hidden' }>
        <Link onClick = {this.goToCalendar} className = "link-options" to = '/'>Home</Link>
        <Link onClick = {this.goToTiles}  className = "link-options" to = '/tiles'>Calendar</Link>
        <Link className = "link-options" to = '/titlePerson'>Lesson</Link>
        <Link className = "link-options" to = '/maps'>Maps</Link>
        <Link className = "link-options" to = '/familyTree'>Family Tree</Link>
        <Link className = "link-options" to = '/timeline'>Timeline</Link>
        <Link className = "link-options" to = '/gallery'>Gallery</Link>
        <Link className = "link-options" to = '/print'>Print</Link>
        {/* <Link className = "link-options" to = '/index'>Index</Link> */}
        {/* <Link className = "link-options" to = '/addInfo'>Admin Page</Link> */}
        </header>
      <Link style={{ textDecoration: 'none', color: 'black' }} to = '/welcome' onClick={this.hideImage}>
      <div className ={this.state.showCalander ? 'welcome-image contain-image' : "hidden"}>
       </div>
       </Link>
        <Route 
         path = '/addInfo' render = {() => (<AddInfo />)}
        />
        <Route 
        path = '/maps' render = {() => (<Maps name = {this.state.nameToSend} date = {this.state.dateToSend}/>)}
        />
        <Route 
        path = '/timeline' render = {() => (<Timeline date = {this.state.dateToSend}/>)}
        />
        <Route 
        path = '/gallery' render = {() => (<Gallery galleryPics = {this.clickLinkGallery} date = {this.state.dateToSend}/>)}
        />
                <Route 
        path = '/galleryPics' render = {() => (<GalleryPics date = {this.state.dateToSend} zIndexShow = {this.changeZindexShow} zIndexHide = {this.changeZindexHide}/>)}
        />
        <Route 
        path = '/introPerson' header = {false} render = {() => (<IntroPerson date = {this.state.dateToSend}/>)}
        />
        <Route 
        path = '/tiles' render = {() => (<Tiles header = {this.setHeaderToFalse} clickLink ={this.clickLink}/>)}
        />
                <Route 
        path = '/titlePerson' render = {() => (<TitlePerson clickLink ={this.clickLinkName} date = {this.state.dateToSend}/>)}
        />
        <Route 
        path = '/familyTree' render = {() => (<FamilyTree name = {this.state.nameToSend} date = {this.state.dateToSend}/>)}
        />
        <Route 
        path = '/print' render = {() => (<Print name = {this.state.nameToSend} date = {this.state.dateToSend}/>)}
        />
        <Route 
        path = '/index' render = {() => (<Index/>)}
        />
        <Route 
        path = '/welcome' render = {() => (<Welcome/>)}
        />
      </div>
      </Router>
    );
  }
}

export default App;
