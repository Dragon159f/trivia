import React, { Component } from 'react';
import { AnswerBtn } from './AnswerBtn.jsx';
import { QuestionTxt } from './QuestionTxt.jsx';
import '../css/Question.css';
// import components


class Question extends Component {
  
  render() {
    return (
      <div id="body">
        <QuestionTxt />
        <AnswerBtn />
        <AnswerBtn /> 
        <AnswerBtn />
        <AnswerBtn /> 
      </div> 
    );
  }
}

export {Question};