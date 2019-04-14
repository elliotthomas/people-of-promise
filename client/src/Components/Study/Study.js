import React, { Component } from 'react';
import './Study.css';

class Study extends Component {

  state = {
  }


  render() {
    const questions = ['What is the first thing God tells Abram to do? Why do you think this word is important? ', 'Notice the insistence and progression of God’s directions to Abram in verse 1.', 'What word is repeated 5 times in verses 2 - 3? How does this reveal God’s purpose for Abram?', 'Look at the map for this study (Map - A). How far was Harran to Canaan?'];
    const questionArray = questions.map(question => <li>{question}</li>)
    console.log(questionArray)
    return (
        <div>
            <ol className = "list">
            {questionArray}
            </ol>
        </div>
    );
  }
}

export default Study;