import React, { Component } from 'react';
import './FamilyTree.css';

class FamilyTree extends Component {
  componentWillMount() { 
    this.getImageUrl();
  }

  state = {
    image: '',
    showImage: true, 
    name: this.props.name
  }

  getImageUrl = () => {
    const date = this.props.date;
    // if(this.tryRequire(`../../images/ft-${date}.png`) == null)
    // {
    //   this.setState({
    //     showImage: false
    //   })
    //   return;
    // }
    const image = require(`../../images/ft-${date}.png`)
    this.setState({
      image: image
    })
    
  }

  tryRequire = (path) => {
    try {
     return require(`${path}`);
    } catch (err) {
     return null;
    }
  };



  render() {

    return (
      <div>
        {this.state.showImage && <div style = {{backgroundImage: `url(${this.state.image})`}}  className = "family-tree-container">
        </div>}
        {!this.state.showImage && <div>There is no family tree for{this.state.name}</div>}
      </div>
    );
  }
}

export default FamilyTree;