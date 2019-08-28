import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Print.css';
import { Redirect } from 'react-router-dom'

class Print extends Component {

  state = {
    name: this.props.name
  }


 
  render() {
    if(!this.props.date){
      return <Redirect to='/' />
    }
      const pdfLink = require(`../../PDF/${this.props.date}-Lesson.pdf`);
    return (
      <div className = 'pdf-link-div'>
        <a  target="_blank" className = 'pdf-link' href={pdfLink}>Click Here to Open a PDF file of {this.state.name}'s Lesson</a>
      </div>
    );
  }
}

export default Print;