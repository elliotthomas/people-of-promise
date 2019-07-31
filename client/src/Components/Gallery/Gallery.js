import React, { Component } from 'react';
import './Gallery.css';
import { Redirect } from 'react-router-dom'

class Gallery extends Component {
  state = {
    goToPics: false
  };

  goToPics = () => {
    this.setState({
      goToPics: true
    })
  }

  render() {
    if(this.state.goToPics) {
      return <Redirect to='/galleryPics' />
    }

    return (
            <div className ="gallery" onClick={this.goToPics} >
            </div>
    );
  }
}

export default Gallery;