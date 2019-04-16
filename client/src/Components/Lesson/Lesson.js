import React, { Component } from 'react';
import './Lesson.css';
import { Markup } from 'interweave';

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
        <div className ='scroll cover-image'>
            <h1 className = "lesson-heading">{this.state.title}</h1>
            <p className = "lesson-text"><Markup content= {this.state.scripture}/></p>
<p className ="verse">{this.state.citation}</p>

        </div>
    );
  }
}

export default Lesson;