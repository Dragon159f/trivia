import React, { Component } from 'react';
import { AnswerBtn } from './AnswerBtn.jsx';
import { QuestionTxt } from './QuestionTxt.jsx';
import { Image } from './Image.jsx';
import '../css/Question.css';
// import components


class Question extends Component {
  
  render() {
    return (
      <div className="question" class="container">
        <div clas="row">
          <QuestionTxt text={this.props.question.question}/>
          <Image url={this.props.question.url}/>
            <AnswerBtn text={this.props.question.answerTxt[0]}/>
            <AnswerBtn text={this.props.question.answerTxt[1]}/> 
            <AnswerBtn text={this.props.question.answerTxt[2]}/>
            <AnswerBtn text={this.props.question.answerTxt[3]}/> 
        </div>
      </div> 
    );
  }
}

export { Question };