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
import { HashRouter as Router, Link, Route, Redirect, NavLink } from 'react-router-dom'

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
    zIndex: 1,
    backgroundColor: '',
    showDate: ''
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
          header: false,
          showCalander: false,
          showDate: this.formatDate(event.currentTarget.getAttribute('data-value'))
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
      this.changeHeaderColorYellow()
    }

    goToTiles = () => {
      this.setState({
        showCalander: false,
        header: false
      })
      this.changeHeaderColorYellow()
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


    setHeaderToTrue = () => {
      this.setState({
        header: true
      });
    }

    changeHeaderColorGreen = () => {
      this.setState({
        backgroundColor: 'rgb(196,206, 185)'
      });
    }

    changeHeaderColorYellow = () => {
      this.setState({
        backgroundColor: 'rgb(240, 220, 130)'
      });
    }

    changeHeaderColorDarkGreen = () => {
      this.setState({
        backgroundColor: 'RGB(115,157, 157)'
      });
    }

    changeHeaderColorRed = () => {
      this.setState({
        backgroundColor: 'RGB(163,20,20)'
      });
    }

    setNametoSend = (name) => {
      this.setState({
        nameToSend: name
      });
    }

    formatDate = (date) => {
      let wordMonth = '';
      const day = date.slice(8,10);
      const year = date.slice(0,4);
      const month = date.slice(5,7);
      switch(month){
        case '01':
        wordMonth = 'January';
        break;
        case '02':
        wordMonth = 'February';
        break;
        case '03':
        wordMonth = 'March';
        break;
        case '04':
        wordMonth = 'April';
        break;
        case '05':
        wordMonth = 'May';
        break;
        case '06':
        wordMonth = 'June';
        break;
        case '07':
        wordMonth = 'July';
        break;
        case '08':
        wordMonth = 'August';
        break;
        case '09':
        wordMonth = 'September';
        break;
        case '10':
        wordMonth = 'October';
        break;
        case '11':
        wordMonth = 'November';
        break;
        case '12':
        wordMonth = 'December';
        break;
        default:
        wordMonth = 'Month';
        break;
      }
  
      const formattedDate = `${wordMonth} ${day}, ${year}`;
      return formattedDate
  }





render() {
  window.onpopstate  = (e) => {
    return <Redirect to='/' />
 }
    return (
      <Router>
      <div className="App">
        <header style={{ zIndex: `${this.state.zIndex}`, backgroundColor: `${this.state.backgroundColor}` }} className={this.state.header ? "App-header" : 'hidden' }>
        <NavLink onClick = {this.goToCalendar} className = "link-options" to = '/'>Home</NavLink>
        <NavLink activeClassName = 'active-link' onClick = {this.goToTiles}  className = "link-options" to = '/tiles'>Calendar</NavLink>
        <NavLink activeClassName = 'active-link' onClick = {this.changeHeaderColorYellow} className = "link-options" to = '/lesson'>Lesson</NavLink>
        <NavLink activeClassName = 'active-link' className = "link-options" to = '/maps'>Maps</NavLink>
        <NavLink activeClassName = 'active-link' className = "link-options" to = '/familyTree'>Family Tree</NavLink>
        <NavLink activeClassName = 'active-link' onClick = {this.changeHeaderColorYellow} className = "link-options" to = '/timeline'>Timeline</NavLink>
        <NavLink activeClassName = 'active-link' onClick = {this.changeHeaderColorYellow} className = "link-options" to = '/gallery'>Gallery</NavLink>
        <NavLink activeClassName = 'active-link' onClick = {this.changeHeaderColorYellow} className = "link-options" to = '/print'>Print</NavLink>
        {/* <Link className = "link-options" to = '/index'>Index</Link> */}
        {/* <Link className = "link-options" to = '/addInfo'>Admin Page</Link> */}
        </header>
        <h1 className = {this.state.header ? "current-name" : 'hidden' }>{this.state.nameToSend} - Week of {this.state.showDate}</h1>
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
        path = '/gallery' render = {() => (<Gallery changeDarkRed = {this.changeHeaderColorRed} galleryPics = {this.clickLinkGallery} date = {this.state.dateToSend} name = {this.state.nameToSend}/>)}
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
        path = '/lesson' render = {() => (<TitlePerson showHeader = {this.setHeaderToTrue} clickLink ={this.clickLinkName} date = {this.state.dateToSend} setName = {this.setNametoSend}/>)}
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
