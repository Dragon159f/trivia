import React, { Component } from 'react';
import { AnswerBtn } from './AnswerBtn.jsx';
import { QuestionTxt } from './QuestionTxt.jsx';
import { Image } from './Image.jsx';
import '../css/Question.css';
// import components


class Question extends Component {
  //this.props.question.choices
  render() {
    return (
      <div className="question" class="container">
          <QuestionTxt text={this.props.question.question_text}/>
            <AnswerBtn text={this.props.question.choices[0]} answer={this.props.updateAnswer}/>
            <AnswerBtn text={this.props.question.choices[1]} answer={this.props.updateAnswer}/> 
            <AnswerBtn text={this.props.question.choices[2]} answer={this.props.updateAnswer}/>
            <AnswerBtn text={this.props.question.choices[3]} answer={this.props.updateAnswer}/> 
        </div>
     
    );
  }
}

export { Question };