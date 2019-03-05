import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
import { getQuestions } from '../clients/firebase.js';

// import components
class App extends Component {
  constructor(props){
    
    super(props);
    this.state = {
      count: 0,
      score: 0,
      pickedChoice: 3,
      }
    getQuestions((questions) => {
      console.log(questions);
     this.setState({
       ...this.state,
       questions: questions
      });
    });
  }

  countUp(){
    if(this.state.count < this.state.questions.length){
      this.setState({
        count: this.state.count + 1
      })
    }
  }

  endGame(){
    if(this.state.score === this.state.questions.length-1){
      alert('congrats');
      this.setState({
        score: this.state.questions.length-1
      });
    }
  }

  consoleCorrectorWrong(){
    var currectQuestion = this.state.questions[this.state.count];
    if(currectQuestion.choices[currectQuestion] === currectQuestion.correct_choice_index){  
      console.log("correct");
      this.setState({
        score: this.state.score + 1
      });
    }
  }

  render() {
    if(this.state.questions === undefined){
      return (<div>"loading"</div>);
    }
    return (
      <div className="app">
        <h1 id="kaboot">Kaboot</h1>
        <p>Score: {this.state.score}/{this.state.questions.length}</p>
        <Question question={this.state.questions[this.state.count]} updateAnswer={() => this.countUp() || this.consoleCorrectorWrong() || this.endGame()}/>
      </div>
    );
  }
}

export default App;