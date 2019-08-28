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
      this.props.changeDarkRed();
      return <Redirect to='/galleryPics' />
    }
    if (performance.navigation.type == 1) {
      return <Redirect to='/' />
    }

    return (
            <div className ="gallery" onClick={this.goToPics} >
            </div>
    );
  }
}

export default Gallery;