import React, { Component } from 'react';
import './TitlePerson.css';
import { Markup } from 'interweave';
import { Redirect } from 'react-router-dom'
import { Controller, animated } from 'react-spring/renderprops';

class Lesson extends Component {
  componentWillMount() { 
    if(!this.props.date){
      return;
    }
    this.getOnePerson();
    this.props.showHeader();
  }

  state = {
    name: '',
    nickname: '',
    title: '',
    intro: '',
    scripture: '',
    citation: '',
    prayer: '',
    questions: '',
    date: '',
    goToTimeline: false,
    goToFamilyTree: false,
    goToMaps: false
}


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
     this.setState({
       name: body.bname,
       nickname: body.nickname,
       title: body.title,
       intro: body.intro,
       scripture: body.scripture,
       citation: body.citation,
       prayer: body.prayer,
       date: this.formatDate(body.displaydate)
     })
     this.props.setName(body.bname);
     this.getAllQuestions(body.bname)
  }

  getAllQuestions = async (name) => {
    const nameObject = {
      name: name
    };
    // console.log('in get all questions')
      const response = await fetch('/api/onePersonQuestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nameObject }),
      });
    const body = await response.json();
    // console.log('this is the body', body)
    const questionArray = body;
    const questions = questionArray.map(question => <li className = 'question-list' key = {question.question} value = {question.question}>{question.question}</li>);
    this.setState({
      questions: questions
    });
  };

  formatDate = (date) => {
    date = date.slice(0, 10);
    let wordMonth = '';
    const day = date.slice(8,10);
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    switch(month){
      case '01':
      wordMonth = 'January';
      break;
      case '02':
      wordMonth = 'February';
      break;
      case '03':
      wordMonth = 'March';
      break;
      case '04':
      wordMonth = 'April';
      break;
      case '05':
      wordMonth = 'May';
      break;
      case '06':
      wordMonth = 'June';
      break;
      case '07':
      wordMonth = 'July';
      break;
      case '08':
      wordMonth = 'August';
      break;
      case '09':
      wordMonth = 'September';
      break;
      case '10':
      wordMonth = 'October';
      break;
      case '11':
      wordMonth = 'November';
      break;
      case '12':
      wordMonth = 'December';
      break;
      default:
      wordMonth = 'Month';
      break;
    }

    const formattedDate = `${wordMonth} ${day}, ${year}`;
    return formattedDate
}

animations = new Controller({
  opacity: 0
})

goToTimeline = () => {
this.setState({
  goToTimeline: true
})
}

goToFamilyTree = () => {
  this.setState({
    goToFamilyTree: true
  })
  }

  goToMaps = () => {
    this.setState({
      goToMaps: true
    })
    }

  render() {
    if(!this.props.date){
      return <Redirect to='/' />
    }
    if(this.state.goToLesson) {
      return <Redirect to='/lesson' />
    }

    if(this.state.goToTimeline) {
      return <Redirect to='/timeline' />
    }

    if(this.state.goToFamilyTree) {
      return <Redirect to='/familyTree' />
    }

    if(this.state.goToMaps) {
      return <Redirect to='/maps' />
    }

    if(!this.state.questions) {
      return <div />
    }

    const props = this.animations.update({opacity: 1})



    return (
        <animated.div className= "outer-div" style = {props}>
            <p className = "intro-welcome" >Welcome to this week’s People of Promise! You are invited to dig into the rich resources provided by this online platform. Please explore the menu bar above and check out the tools that will help give context to this week's Lesson. The <a onClick={this.goToTimeline}>Timeline</a>, the <a onClick={this.goToFamilyTree}>Family Tree</a> and <a onClick={this.goToMaps}>Maps</a> are useful to set the promise in context. Also enter the <a>Gallery</a> each week and let the various works of art open your eyes to new insights to understand the message of the passage. </p>
            <div className ="scroll cover-image">
            <div className ="columns">
            <h4 className = "text-heading">Introduction</h4>
            <p className = "lesson-intro"><Markup content= {this.state.intro}/></p>
            <h4 className = "text-heading">Scripture</h4>
            <p className = "lesson-text"><Markup content= {this.state.scripture}/></p>
            {/* <p className ="verse">{this.state.citation}</p> */}
            <h4 className = "text-heading">Questions</h4>
            <ol className = "questions">
              {this.state.questions}
            </ol>
            <h4 class = "text-heading">Prayer</h4>
            <p className ="prayer">{this.state.prayer}</p>
            </div>
            </div>
        </animated.div>
    );
  }
}

export default Lesson;