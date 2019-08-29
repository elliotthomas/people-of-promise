import React, { Component } from 'react';
import './FamilyTree.css';
import { Redirect } from 'react-router-dom'

class FamilyTree extends Component {
  componentWillMount() { 
    if(!this.props.date){
      return;
    }
    this.getImageUrl();
  }

  state = {
    image: '',
    name: this.props.name,
    familyTree: ''
  }

  getImageUrl = () => {
    const date = this.props.date;
    const image = require(`../../images/ft-${date}.png`)
    this.setState({
      image: image
    })
  }


  render() {
    if(!this.props.date){
      return <Redirect to='/' />
    }

    return (
      <div>
        <img src= {this.state.image} className = "family-tree-container">
        </img>
        </div>
    );
  }
}

export default FamilyTree;