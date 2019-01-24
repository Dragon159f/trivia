import React, { Component } from 'react';
import { AnswerBtn } from './AnswerBtn.jsx';
import { QuestionTxt } from './QuestionTxt.jsx';
import { Image } from './Image.jsx';
import '../css/Question.css';
// import components


class Question extends Component {
  
  render() {
    return (
      <div className="question">
        <QuestionTxt text="Question: When was the computer first invented?"/>
        <Image url="http://www.tech-faq.com/wp-content/uploads/who-invented-computer.jpg"/>
        <AnswerBtn text="1984"/>
        <AnswerBtn text="1936"/> 
        <AnswerBtn text="1962"/>
        <AnswerBtn text="1925"/> 
      </div> 
    );
  }
}

export {Question};