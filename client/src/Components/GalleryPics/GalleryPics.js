import React, { Component } from 'react';
import './GalleryPics.css';
import { Redirect } from 'react-router-dom'
import Modal from 'react-awesome-modal';
import { Controller, animated } from 'react-spring/renderprops';

class GalleryPics extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

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
    if(!this.props.date){
      return;
    }
    this.getImages();
    this.getOnePerson();
  }

  animations = new Controller({
    opacity: 0
  })

openModal(imageUrl, picObject, dimension) {
    this.props.zIndexHide();
    if(dimension === 1) {
      this.setState({
        frameModal: 'frame-modal-long'
    });
  } else {
    this.setState({
      frameModal: 'frame-modal-wide'
  });
  }
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
  this.props.zIndexShow();
}

  getImages = async () => {
    const dateObject = {
      date: this.props.date
    };
    // console.log('date', this.props.date)
      const response = await fetch('/api/getImages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: dateObject }),
      });
    const body = await response.json();

    // console.log('response from api', body)

    for(let row of body) {
    if(row.picnum == 1) {
      const date = row.displaydate.slice(0, 10);
      // console.log('date in for', date)
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
  const node = this.myRef.current
  // console.log('node', node.naturalWidth)
  node.onload = function (){
    // console.log('node', node.Width)
  };
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
    
    if(!this.props.date){
      return <Redirect to='/' />
    }

    const props = this.animations.update({opacity: 1})


    return (
            <animated.div className ="gallery-background" style={props}>
          <div className="frame-1" onClick={() => this.openModal(this.state.image1, this.state.picRow1, 2)} >
         <div className="mat-1">
          <div className="art-1">
          <img style = {{backgroundImage: `url(${this.state.image1})`}} className = 'image-1' ref={this.myRef}></img>
          </div>
          </div>
          </div>
          <div className="frame-2" onClick={() => this.openModal(this.state.image2, this.state.picRow2, 2)}>
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image2})`}} className = 'image-2' ></div>
          </div>
          </div>
          </div>
          <div className="frame-3" onClick={() => this.openModal(this.state.image3, this.state.picRow3, 1)}>
         <div className="mat-1">
          <div className="art-1">
          <div style = {{backgroundImage: `url(${this.state.image3})`}} className = 'image-3'></div>
          </div>
          </div>
          </div>
          <div className = 'enlarge'>Click on <br /> a Picture <br /> to Enlarge</div>
          <div onClick={e => e.stopPropagation()}>
          <Modal visible={this.state.visible} width="1200" height="650" effect="fadeInUp" styles={{ backgroundColor: "rgb(240, 220, 130)"  }}>
                    <div>
                    <a href="javascript:void(0);" className = 'close-modal' onClick={() => this.closeModal()}></a>
                        <div className={this.state.frameModal}>
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
          </animated.div>
          
    );
  }
}

export default GalleryPics;