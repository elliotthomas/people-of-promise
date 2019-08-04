import React, { Component } from 'react';
import './GalleryPics.css';

class GalleryPics extends Component {

  state = {
    image1: '',
    image2: '',
    image3: '',
    picRow1: '',
    picRow2: '',
    picRow3: '',
    name: ''
  };

  componentWillMount() {
    this.getImages();
    this.getOnePerson();
  }

  getImages = async () => {
    const dateObject = {
      date: this.props.date
    };
      const response = await fetch('/api/getImages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: dateObject }),
      });
    const body = await response.json();

    for(let row of body) {
    if(row.picnum == 1) {
      const date = row.displaydate.slice(0, 10);
      const imageUrl1 = require(`../../images/${date}-${row.picnum}.jpg`)
      const picRow1 = row
      this.setState({
        image1: imageUrl1,
        picRow1: picRow1
      })
    }
    if(row.picnum == 2) {
      const date = row.displaydate.slice(0, 10);
      const imageUrl2 = require(`../../images/${date}-${row.picnum}.jpg`)
      const picRow2 = row
      this.setState({
        image2: imageUrl2,
        picRow2: picRow2
      })
    }
    if(row.picnum == 3) {
      const date = row.displaydate.slice(0, 10);
      const imageUrl3 = require(`../../images/${date}-${row.picnum}.jpg`)
      const picRow3 = row
      this.setState({
        image3: imageUrl3,
        picRow3: picRow3
      })
    }
  }
 }

 getOnePerson = async () => {
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
     name: body.bname,
   })
   
}

  render() {


    return (
            <div className ="gallery-background">
            <h1 className = "title-heading-pic">{this.state.name}</h1>
          <div className="frame-1">
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image1})`}} className = 'image-1'></div>
          </div>
          </div>
          </div>
          <div className="frame-2">
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image2})`}} className = 'image-2'></div>
          </div>
          </div>
          </div>
          <div className="frame-3">
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image3})`}} className = 'image-3'></div>
          </div>
          </div>
          </div>
          <div className = 'enlarge'>Click on <br /> a Picture <br /> to Enlarge</div>
          {/* <div className="frame-2">
          <div className="art-2">
          <div className = 'image-2'></div>
          </div>
          </div> */}
          </div>
          
    );
  }
}

export default GalleryPics;