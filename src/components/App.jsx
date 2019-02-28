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
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count); 
  }

  returnUserChoice(){

  }

  consoleCorrectorWrong(){
      console.log("Correct");
  }

  render() {
    console.log(this.state.questions);
    if(this.state.questions === undefined){
      return (<div>"Still loading"</div>);
    }
    //if(this.state.correct_choice_index === this.state.choice[this.state.correct_choice_index]){
    //  alert("correct");
    //}
    return (
      <div className="app">
        <h1>Kaboot</h1>
        <Question question={this.state.questions[this.state.count]} updateAnswer={() => this.consoleCorrectorWrong()}/>
        <button onClick={() => this.countUp()}>Next</button>
      </div>
    );
  }
}

export default App;