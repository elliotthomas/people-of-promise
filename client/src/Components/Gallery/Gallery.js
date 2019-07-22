import React, { Component } from 'react';
import './Gallery.css';
import ReactMediumImg from 'react-medium-zoom'

class Gallery extends Component {

  state = {
    isZoomed: false
  }
  zoomIn = () => {
    this.setState({ isZoomed: true });

  }
  
  zoomOut = () => {
    this.setState({ isZoomed: false });
  }

  render() {


    return (
        <div className = "gallery-container">
            <div className ="gallery">
              <div className ="image-1-container">
              <ReactMediumImg
              onClick={() => this.state.isZoomed ? this.zoomOut() : this.zoomIn()}
              className = 'image-1'
              src={require('../../images/adam-1.png')}
        />
              </div>
              <div className ="image-2-container">
              <ReactMediumImg className='image-2'
        src={require('../../images/adam-2.png')}
        />
              </div>
              <div className ="image-3-container">
              <ReactMediumImg className='image-3'
        src={require('../../images/adam-3.png')}
        />
              </div>
              <div className = "image-4-container">
              <ReactMediumImg className='image-4'
        src={require('../../images/adam-4.jpg')}
        />
              </div>
            </div>
          </div>
    );
  }
}

export default Gallery;