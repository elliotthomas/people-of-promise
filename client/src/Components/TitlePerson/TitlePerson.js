import React, { Component } from 'react';
import './TitlePerson.css';
import { HashRouter as Router,Link, Route, Redirect} from 'react-router-dom'

class Lesson extends Component {
  componentWillMount() { 
    this.getOnePerson();
  }

  state = {
    name: '',
    nickname: '',
    title: '',
    intro: '',
    scripture: '',
    citation: '',
    prayer: ''
  }

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
     this.setState({
       name: body.bname,
       nickname: body.nickname,
       title: body.title,
       intro: body.intro,
       scripture: body.scripture,
       citation: body.citation,
       prayer: body.prayer
     })
     
  }

  render() {
    return (
        <div>
            <div className= "text-heading">
            <h1 className = "title-heading">{this.state.name}</h1>
  <p className ="title-verse">{this.state.citation}</p>
  <p className ="title-verse">{this.props.date}</p>
  </div>
  <div className = 'leaves cover-image'></div>

        </div>
    );
  }
}

export default Lesson;