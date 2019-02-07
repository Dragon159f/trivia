import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
import{ buildFirebase} from '../clients/firebase';
// import components
//var firebaseDatabase = buildFirebase();
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Question1:{
        question: "Question: When was the computer first invented?",
        url: "http://www.tech-faq.com/wp-content/uploads/who-invented-computer.jpg",
        correctChoice: "1936",
        answerTxt: ["1981", "1936", "1963", "1919"]
      },
      Question2:{
        question: "Question: When was the computer first invented?",
        url: "http://www.tech-faq.com/wp-content/uploads/who-invented-computer.jpg",
        correctChoice: "1936",
        answerTxt: ["1981", "1936", "1963", "1919"]
      }
    }
  }
  update_answerTxt(){
    setState().Question2.answerTxt = ["Wrong","Correct","Wrong","Wrong"]
    alert("Pocket Monsters");
  };

  render() {
    return (
      <div className="app">
        <h1>Kaboot</h1>
        <Question question={this.state.Question1} updateAnswer={() => this.update_answerTxt()} />
      </div>
    );
  }
}

export default App;