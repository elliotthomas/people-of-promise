import React, { Component } from 'react';
import './IntroPerson.css';
import { Redirect } from 'react-router-dom'
import { Controller, animated } from 'react-spring/renderprops';
 
class IntroPerson extends Component {
  componentWillMount() { 
    if(!this.props.date){
      return;
    }
    this.getOnePerson();
  }

  componentDidMount () {
    setInterval(() => this.setState({ goToLesson: true}), 5000)
  }

  state = {
    name: '',
    citation: '',
    borderUrl: '',
    border: '',
    goToTitlePerson: false,
    goToLesson: false
  };

  getOnePerson = async () => {
    // console.log('in get one person', this.props.date)
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
    let name = body.bname
    if(body.bname == 'Abraham and Sarah')
    {
      name = "Abraham\nand Sarah"
    }
     this.setState({
       name: name,
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
    // console.log("border->", this.state.border)
    let headingColor = '';
    switch(border){
      case 1:
      headingColor = 'rgb(109,167,121)';
      break;
      case 2:
      headingColor = 'rgb(87,144,181)';
      break;
      case 3:
      headingColor = 'rgb(234,107,67)';
      break;
      case 4:
      headingColor = 'rgb(235,45,47)';
      break;
      case 5:
      headingColor = 'rgb(80,109,170)';
      break;
      case 6:
      headingColor = 'rgb(142,62,201)';
      break;
      default:
      headingColor = 'black';
      break;
    }
    this.setState({
      headingColor: headingColor
    })
    
  }

  goToLesson = () => {
    this.setState({
      goToLesson: true
    })
  }

  animations = new Controller({opacity: 0})


  render() {
    if(this.state.goToTitlePerson) {
      return <Redirect to='/lesson' />
    }
    if(this.state.goToLesson) {
      return <Redirect to='/lesson' />
    }
    if(!this.props.date){
      return <Redirect to='/' />
    }
    const props = this.animations.update({opacity: 1})

    return (
            <animated.div onClick = {this.goToLesson} className = "background-border" style ={props}>
            <div style = {{backgroundImage: `url(${this.state.borderUrl})`}} className ="border-image" >
            <h1 className = "p-o-p" style = {{color: `${this.state.headingColor}`}}>People of Promise</h1>
            <h1 className = "intro-name">{this.state.name}</h1>
             <p className ="verse">{this.state.citation}</p>
            </div>
            </animated.div>
    );
  }
}

export default IntroPerson;