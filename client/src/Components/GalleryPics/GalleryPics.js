import React, { Component } from 'react';
import './GalleryPics.css';
import Modal from 'react-awesome-modal';

class GalleryPics extends Component {

  state = {
    image1: '',
    image2: '',
    image3: '',
    picRow1: '',
    picRow2: '',
    picRow3: '',
    name: '',
    imageUrl: '',
    visible: false, 
    picObjectModel: ''
  };

  componentWillMount() {
    this.getImages();
    this.getOnePerson();
  }

  openModal(imageUrl, picObject) {
    this.setState({
        modalUrl: imageUrl,
        visible : true,
        picObjectModel: picObject
    });

}

closeModal() {
  this.setState({
      visible : false
  });
}

  getImages = async () => {
    const dateObject = {
      date: this.props.date
    };
    console.log('date', this.props.date)
      const response = await fetch('/api/getImages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: dateObject }),
      });
    const body = await response.json();

    console.log('response from api', body)

    for(let row of body) {
    if(row.picnum == 1) {
      const date = row.displaydate.slice(0, 10);
      console.log('date in for', date)
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
     name: body.bname
   })
   
}

  render() {


    return (
            <div className ="gallery-background">
            <h1 className = "title-heading-pic">{this.state.name}</h1>
          <div className="frame-1" onClick={() => this.openModal(this.state.image1, this.state.picRow1)} >
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image1})`}} className = 'image-1'></div>
          </div>
          </div>
          </div>
          <div className="frame-2" onClick={() => this.openModal(this.state.image2, this.state.picRow2)}>
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image2})`}} className = 'image-2'></div>
          </div>
          </div>
          </div>
          <div className="frame-3" onClick={() => this.openModal(this.state.image3, this.state.picRow3)}>
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image3})`}} className = 'image-3'></div>
          </div>
          </div>
          </div>
          <div className = 'enlarge'>Click on <br /> a Picture <br /> to Enlarge</div>
          <div onClick={e => e.stopPropagation()}>
          <Modal visible={this.state.visible} width="1200" height="710" effect="fadeInUp" styles={{ backgroundColor: "rgb(181,90,69)"  }}>
                    <div>
                    <a href="javascript:void(0);" className = 'close-modal' onClick={() => this.closeModal()}></a>
                        <div className="frame-modal">
                        <div className="mat-modal">
                        <div className="art-modal">
                        <div style = {{backgroundImage: `url(${this.state.modalUrl})`}} className = 'image-modal'></div>
                    </div>
                    </div>
                    </div>
                    <div className = 'pic-caption'>
                    <h3 className = 'pic-title'>{this.state.picObjectModel.pictitle}</h3>
                    <h5 className = 'pic-author'>{this.state.picObjectModel.picauthor}</h5>
                    {/* <h6 className = 'pic-author'>{this.state.picObjectModel.picyear}</h6> */}
                      </div>
                    </div>
            </Modal>
            </div>
          </div>
          
    );
  }
}

export default GalleryPics;