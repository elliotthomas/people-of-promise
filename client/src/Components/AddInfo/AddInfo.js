import React, { Component } from 'react';
import './AddInfo.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddInfo extends Component {

  componentWillMount() { 
    this.getAllPeople();
  }

  state = {
    date: '',
    name: '',
    nickname: '',
    title: '',
    intro: '',
    scripture: '',
    citation: '',
    prayer: '',
    dateArray: '',
    namesDone: '',
    namesForDel: '',
    nameDel: '', 
    questionToAdd: '',
    nameForQuestion: ''
  }

  getAllPeople = async () => {
    const response = await fetch('/api/people');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log('body from info ->', body)
    const dates = this.getDateArray(body).dateArray.map(date => <option key = {date} value = {date}>{date}</option>);
    const namesForDel = this.getDateArray(body).namesDone.map(object => <option key = {object.name} value = {object.name}>{object.name}</option>);
    const objectNameDate = this.getDateArray(body).namesDone.map(object => <li key = {object.date}>{object.name} - {object.date}</li>);
    this.setState ({
      dateArray: dates,
      namesDone: objectNameDate,
      namesForDel: namesForDel
  })
    console.log(this.state.dateArray)
  };

  getDateArray = (array) => {
    const dateArray = [];
    const datesDone = [];
    for (let object of array) {
      if(object.bname === null && object.nickname === null && object.title === null && object.citation === null && object.intro === null && object.prayer === null && object.scripture === null) {
        dateArray.push(this.formatDate(object.displaydate))
      }else {
        const objectToPush = {
          name: object.bname,
          date: this.formatDate(object.displaydate)
        } 
        datesDone.push(objectToPush);
      }
    }
    const dateObject = {
      dateArray: dateArray,
      namesDone: datesDone
    }
  return dateObject;
}
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

handleChangeFor = (property) => {
  return (event) => {
      this.setState({
              [property]: event.target.value,
  })
}
}

selectDate = (event) => {
  const date = event.currentTarget.value
  this.setState({
    date: date
  })
}

selectNameToDelete = (event) => {
  console.log('in select name to del')
  const name = event.currentTarget.value
  this.setState({
    nameDel: name
  })
  console.log('in select', this.state.nameDel)
}

selectQuestionToAdd = (event) => {
  const name = event.currentTarget.value
  this.setState({
    nameForQuestion: name
  })
}

handleSubmitPerson = async event => {
event.preventDefault();
const objectToSend = {
  date: this.state.date,
  name: this.state.name,
  nickname: this.state.nickname,
  title: this.state.title,
  intro: this.state.intro,
  scripture: this.state.scripture,
  citation: this.state.citation,
  prayer: this.state.prayer
}
const response = await fetch('/api/addPerson', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ postPerson: objectToSend }),
});
const body = await response.text();
this.setState({ responseToPost: body });
this.getAllPeople();
}

handleDeletePerson = async event => {
  event.preventDefault();
  const name = this.state.nameDel;
  console.log('name ->',name)
  const response = await fetch('/api/deletePerson', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: name}),
  });
  const body = await response.text();
  this.setState({ responseToPost: body });
  this.getAllPeople();
  }

  questionToAdd = async event => {
    event.preventDefault();
    const name = this.state.nameForQuestion;
    const question = this.state.questionToAdd;
    const objectToSend = {
      name: name,
      question: question
    }
    const response = await fetch('/api/questionToAdd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objectToSend),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    this.setState({ questionToAdd: '' });
    this.getAllPeople();
    }

render() {
    return (
        <div>
          <Form onSubmit={this.handleSubmitPerson}>
          <p>People Already Created</p>
          <ul>
          {this.state.namesDone}
          </ul>
          <p>
            <strong className = "header">Create New Person</strong>
          </p>
          <Form.Group controlId="formDate">
      <Form.Control onChange ={this.selectDate} as="select" multiple>
      <option>Choose Date</option>
      {this.state.dateArray}
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="formName">
    <Form.Control onChange= {this.handleChangeFor('name')} value = {this.state.name} placeholder="Name" />
  </Form.Group>
  <Form.Group controlId="formNickname">
    <Form.Control onChange= {this.handleChangeFor('nickname')} value = {this.state.nickname} placeholder="Nickname" />
  </Form.Group>
  <Form.Group controlId="formTitle">
    <Form.Control onChange= {this.handleChangeFor('title')} value = {this.state.title} placeholder="Title" />
  </Form.Group>
  <Form.Group controlId="formIntro">
    <Form.Control as = 'textarea' rows = '4' onChange= {this.handleChangeFor('intro')} value = {this.state.intro} placeholder="Intro" />
  </Form.Group>
  <Form.Group controlId="formScripture">
    <Form.Control as = 'textarea' rows = '4' onChange= {this.handleChangeFor('scripture')} value = {this.state.scripture} placeholder="Scripture" />
  </Form.Group>
  <Form.Group controlId="formCitation">
    <Form.Control onChange= {this.handleChangeFor('citation')} value = {this.state.citation} placeholder="Citation" />
  </Form.Group>
  <Form.Group controlId="formPrayer">
    <Form.Control as = 'textarea' rows = '4' onChange= {this.handleChangeFor('prayer')} value = {this.state.prayer} placeholder="Prayer" />
  </Form.Group>
  <Button variant="primary" type="submit">Submit</Button>
  </Form>
  <Form onSubmit={this.handleDeletePerson}>
      <p>
        <strong className = "header">Delete Person</strong>
      </p>
    <Form.Control onChange ={this.selectNameToDelete} as="select">
      <option>Select Name to Delete</option>
      {this.state.namesForDel}
      </Form.Control>
      <Button variant="primary" type="submit">Delete</Button>
  </Form>
  <Form onSubmit={this.questionToAdd}>
      <p>
        <strong className = "header">Add Question for Person</strong>
      </p>
      <Form.Control onChange ={this.selectQuestionToAdd} as="select">
      <option>Select Question to Add</option>
      {this.state.namesForDel}
      </Form.Control>
      <Form.Group controlId="formQuestion">
    <Form.Control onChange= {this.handleChangeFor('questionToAdd')} value = {this.state.questionToAdd} placeholder="Question To Add" />
  </Form.Group>
      <Button variant="primary" type="submit">Add Question</Button>
  </Form>
        </div>
    );
  }
}

export default AddInfo;