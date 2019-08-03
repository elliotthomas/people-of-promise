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
       border: imageUrl 
     })
  }
  goToTitlePerson = () => {
    this.setState({
      goToTitlePerson: true
    })
  }
  render() {
    if(this.state.goToTitlePerson) {
      return <Redirect to='/titlePerson' />
    }
    return (
            <div className = "background-border">
            <div style = {{backgroundImage: `url(${this.state.border})`}} className ="border-image" onClick={this.goToTitlePerson}>
            <h1 className = "p-o-p">People of Promise</h1>
            <h1 className = "intro-name">{this.state.name}</h1>
             <p className ="verse">{this.state.citation}</p>
            </div>
            </div>
    );
  }
}

export default IntroPerson;