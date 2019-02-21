import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
//import{ buildFirebase} from '../clients/firebase';
// import components
//var firebaseDatabase = buildFirebase();
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      Question: [{
        question: "Question: When was the computer first invented?",
        url: "http://www.tech-faq.com/wp-content/uploads/who-invented-computer.jpg",
        correctChoice: "1936",
        userChoice: "",
        answerTxt: ["1981", "1936", "1963", "1919"]        
      },{
        question: "Question: Who is this pokemon?",
        url: "http://www.tech-faq.com/wp-content/uploads/who-invented-computer.jpg",
        correctChoice: "Bulbasaur",
        userChoice: "",
        answerTxt: ["Bulbasaur", "Charmander", "Charizard", "Charmelon"]
      }
    ]}
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
    return (
      <div className="app">
        <h1>Kaboot</h1>
        <Question question={this.state.Question[this.state.count]} updateAnswer={() => this.consoleCorrectorWrong()}/>
        <button onClick={() => this.countUp()}>Next</button>
      </div>
    );
  }
}

export default App;