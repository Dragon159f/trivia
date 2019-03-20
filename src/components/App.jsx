import React, { Component } from 'react';
import '../css/App.css';
import { EndGame } from './EndGame.jsx';
import { Question } from './Question.jsx';
import { getQuestions } from '../clients/firebase.js';

// import components
class App extends Component {
  constructor(props){
    
    super(props);
    this.state = {
      count: 0,
      score: 0,
      value: 0,
      url: "",
      showGame: true,
      showEnd: false,
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

  ShowandHide(){
    this.setState({
      showGame: false,
      showEnd: true,
    })
  }

  RorW(value){
    let currectQuestion = this.state.questions[this.state.count];
    if(value === currectQuestion.correct_choice_index){  //right
      this.setState({
        score: this.state.score + 1,
        url: "../../assets/correct.mp3"
      });
    } else{ //wrong
      this.setState({
        url: "../../assets/wrong.wav"
      });
    }
    if(this.state.count + 1 === this.state.questions.length){ //end game
      this.ShowandHide();
    }
  }
  
  render() {
    if(this.state.questions === undefined){
      return (
      <div class="d-flex align-items-center" id="loading">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>);
    }
    
    return (
      <div className="app">
        <h1 id="kaboot">Kaboot</h1>
        <p id="score">Score: {this.state.score}/{this.state.questions.length}</p>
        { this.state.showGame?
          <div>
            <Question question={this.state.questions[this.state.count]} updateAnswer={() => this.countUp()}
            onClick={(value)=> this.RorW(value)}/>
          </div> 
        :null }
        { this.state.showEnd?
        <div>
          <EndGame />
        </div>
        :!null }
      </div>
    );
  }
}

export default App;