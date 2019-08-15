import React, { Component } from 'react';
import './FamilyTree.css';

class FamilyTree extends Component {
  componentWillMount() { 
    this.getImageUrl();
  }

  state = {
    image: ''
  }

  getImageUrl = () => {
    const date = this.props.date;
    const image = require(`../../images/ft-${date}.png`)
    this.setState({
      image: image
    })
  }



  render() {

    return (
        <div style = {{backgroundImage: `url(${this.state.image})`}}  className = "family-tree-container">
        </div>
    );
  }
}

export default FamilyTree;