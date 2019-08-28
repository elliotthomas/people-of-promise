import React, { Component } from 'react';
import './Timeline.css';
import { Redirect } from 'react-router-dom'

class Timeline extends Component {

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

    const imageUrl = require(`../../images/timeline-${body.timeline}.png`)
     this.setState({
       imageUrl: imageUrl
     })
  }
  render() {
    if(!this.props.date){
      return <Redirect to='/' />
    }

    return (
        <div style = {{backgroundImage: `url(${this.state.imageUrl})`}}  className = "timeline-container">
        </div>
    );
  }
}

export default Timeline;