import React, { Component } from 'react';
import './Gallery.css';
import { Redirect } from 'react-router-dom'
import { Controller, animated } from 'react-spring/renderprops';

class Gallery extends Component {
  state = {
    goToPics: false
  };

  animations = new Controller({
    opacity: 0
  })

  componentDidMount () {
    setInterval(() => this.setState({ goToPics: true}), 2000)
  }

  

  render() {
    if(this.state.goToPics) {
      return <Redirect to='/galleryPics' />
    }
    if (performance.navigation.type == 1) {
      return <Redirect to='/' />
    }


    const props = this.animations.update({opacity: 1})

    return (
            <animated.div className ="gallery" style = {props}>
            </animated.div>
    );
  }
}

export default Gallery;