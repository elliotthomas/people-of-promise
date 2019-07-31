import React, { Component } from 'react';
import './GalleryPics.css';

class GalleryPics extends Component {

  render() {


    return (
            <div className ="gallery-background">
          <div className="frame-1">
         <div className="mat-1">
          <div className="art-1">
          <div className = 'image-1'></div>
          </div>
          </div>
          </div>
          <div className="frame-2">
          <div className="art-2">
          <div className = 'image-2'></div>
          </div>
          </div>
          </div>
          
    );
  }
}

export default GalleryPics;