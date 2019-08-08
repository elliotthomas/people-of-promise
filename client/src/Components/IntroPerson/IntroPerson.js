import React, { Component } from 'react';
import './IntroPerson.css';
import { Redirect } from 'react-router-dom'

class IntroPerson extends Component {
  componentWillMount() { 
    this.getOnePerson();
  }

  state = {
    name: '',
    citation: '',
    borderUrl: '',
    border: '',
    goToTitlePerson: false
  };

  getOnePerson = async () => {
    console.log('in get one person', this.props.date)
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
    const imageUrl = require(`../../images/border-${body.border}.png`)
     this.setState({
       name: body.bname,
       citation: body.citation,
       borderUrl: imageUrl, 
       border: body.border
     })
     this.changeHeadingColor();
  }

  goToTitlePerson = () => {
    this.setState({
      goToTitlePerson: true
    })
  }

  changeHeadingColor = () => {
    let border = this.state.border
    console.log("border->", this.state.border)
    let headingColor = '';
    switch(border){
      case 1:
      headingColor = 'green';
      break;
      case 2:
      headingColor = 'cadetblue';
      break;
      case 3:
      headingColor = 'orangered';
      break;
      case 4:
      headingColor = 'deeppink';
      break;
      case 5:
      headingColor = 'darkblue';
      break;
      case 6:
      headingColor = 'rebeccapurple';
      break;
      default:
      headingColor = 'black';
      break;
    }
    this.setState({
      headingColor: headingColor
    })
    
  }

  render() {
    if(this.state.goToTitlePerson) {
      return <Redirect to='/titlePerson' />
    }
    return (
            <div className = "background-border">
            <div style = {{backgroundImage: `url(${this.state.borderUrl})`}} className ="border-image" onClick={this.goToTitlePerson}>
            <h1 className = "p-o-p" style = {{color: `${this.state.headingColor}`}}>People of Promise</h1>
            <h1 className = "intro-name">{this.state.name}</h1>
             <p className ="verse">{this.state.citation}</p>
            </div>
            </div>
    );
  }
}

export default IntroPerson;