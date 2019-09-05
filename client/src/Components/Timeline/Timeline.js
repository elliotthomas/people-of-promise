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
    currentTimeline: '',
    showImage: true,
    showTimelineCara: true
  }

  getOnePerson = async () => {
    // console.log('in get one person', this.props.date)
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

    let showTimelineCara = null;

    if(body.timeline === 7) {
      showTimelineCara = false;
    } else {
     showTimelineCara = true;
    }

    const imageUrl = require(`../../images/timeline-${body.timeline}.png`)
     this.setState({
       currentTimeline: body.timeline,
       imageUrl: imageUrl,
       showTimelineCara: showTimelineCara
     })
  }

  backOne = () => {
    let current = this.state.currentTimeline

    if(current === 1) {
      current = 6
    } else {
      current = current - 1;
    }

    const imageUrl = require(`../../images/timeline-${current}.png`)
    this.setState({
      currentTimeline: current,
      imageUrl: imageUrl
    })
  }


  forwardOne = () => {
    let current = this.state.currentTimeline

    if(current === 6) {
      current = 1
    } else {
      current = current + 1;
    }

    const imageUrl = require(`../../images/timeline-${current}.png`)
    this.setState({
      currentTimeline: current,
      imageUrl: imageUrl
    })
  }

  render() {
    if(!this.props.date){
      return <Redirect to='/' />
    }

    return (
        <div style = {{backgroundImage: `url(${this.state.imageUrl})`}}  className = "timeline-container">
        {/* {this.state.showTimelineCara && <div className = 'arrow-container'>
        <div className = 'arrow-left' onClick = {this.backOne}></div>
        <h1 className = 'timeline-header'>Timeline {this.state.currentTimeline}/6</h1>
        <div className = 'arrow-right' onClick = {this.forwardOne}></div>
        </div>} */}
        </div>
    );
  }
}

export default Timeline;