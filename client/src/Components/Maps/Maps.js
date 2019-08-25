import React, { Component } from 'react';
import './Maps.css';
import { Redirect } from 'react-router-dom'

class Maps extends Component {
  componentWillMount() { 
    if(!this.props.date){
      return;
    }
    this.getOnePerson();
  }

  state = {
    name: '',
    imageUrl: '',
    showImage: true
  }

  getOnePerson = async () => {
    console.log('in get one person', this.props.date)
    const dateObject = {
      date: this.props.date
    };
      const response = await fetch('/api/onePerson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: dateObject }),
      });
    const body = await response.json();
    this.setState({
      name: body.bname
    })
     if(!body.map){
      this.setState({
        showImage: false
      })
      return;
     }
    const imageUrl = require(`../../images/map-${body.map}.png`)
     this.setState({
       imageUrl: imageUrl
     })
  }



  render() {
    if(!this.props.date){
      return <Redirect to='/' />
    }

    return (
        <div className = "map-container">
          {this.state.showImage && <h1 className = 'map-header'>{this.state.name}</h1>}
          {this.state.showImage && <div style = {{backgroundImage: `url(${this.state.imageUrl})`}} className = 'map-image'>
          </div>}
          {!this.state.showImage && <div className = 'no-map'>There is no map for {this.state.name}</div>}
        </div>
    );
  }
}

export default Maps;