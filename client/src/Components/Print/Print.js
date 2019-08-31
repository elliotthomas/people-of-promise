import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Print.css';
import { Redirect } from 'react-router-dom'

class Print extends Component {


 
  render() {
    if(!this.props.date){
      return <Redirect to='/' />
    }
    function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
      const pdfLink = require(`../../PDF/${this.props.date}-Lesson.pdf`);
      openInNewTab(pdfLink);
      return <Redirect to='/lesson' />;
    return (
      <div className = 'pdf-link-div'>
        <a  target="_blank" className = 'pdf-link' href={pdfLink}>Click For {this.props.name}'s Lesson (PDF File)</a>
      </div>
    );
  }
}

export default Print;