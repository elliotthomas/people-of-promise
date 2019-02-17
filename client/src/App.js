import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: {
      name: '',
      lesson: '',
      nickname: '',
      questions: ''
    },
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    console.log('this is e->', e)
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <strong>Add a Biblical Hero</strong>
        </header>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Create New Biblical Hero:</strong>
          </p>
          <input
            type="text"
            placeholder = "Name"
            value={this.state.post.name}
            onChange={e => this.setState({ post: {...this.state.post, name: e.target.value }})}
          />
          <input
            type="text"
            placeholder = "Lesson"
            value={this.state.post.lesson}
            onChange={e => this.setState({ post: {...this.state.post, lesson: e.target.value} })}
          />
          <input
            type="text"
            placeholder = "Nickname"
            value={this.state.post.nickname}
            onChange={e => this.setState({ post: {...this.state.post, nickname: e.target.value} })}
          />
          <input
            type="text"
            placeholder = "Questions"
            value={this.state.post.questions}
            onChange={e => this.setState({ post: {...this.state.post, questions: e.target.value} })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
