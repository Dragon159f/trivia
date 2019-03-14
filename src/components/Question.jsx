import React, { Component } from 'react';
import { AnswerBtn } from './AnswerBtn.jsx';
import { QuestionTxt } from './QuestionTxt.jsx';
//import { Image } from './Image.jsx';
import '../css/Question.css';
// import components


class Question extends Component {
  //this.props.question.choices
  render() {
    return (
      <div className="question" class="container">
          <QuestionTxt text={this.props.question.question_text}/>
            <div class="row">
              <div class="col">
                <AnswerBtn class="btn btn-outline-danger" text={this.props.question.choices[0]} answer={this.props.updateAnswer} onButtonClick={()=>this.props.onClick(0)} />
              </div>
              <div class="col">
                <AnswerBtn class="btn btn-outline-primary" text={this.props.question.choices[1]} answer={this.props.updateAnswer} onButtonClick={()=>this.props.onClick(1)}/> 
              </div>
              <div class="w-100"></div>
              <div class="col">
                <AnswerBtn class="btn btn-outline-warning" text={this.props.question.choices[2]} answer={this.props.updateAnswer} onButtonClick={()=>this.props.onClick(2)}/>
              </div>
              <div class="col">
                <AnswerBtn class="btn btn-outline-success" text={this.props.question.choices[3]} answer={this.props.updateAnswer} onButtonClick={()=>this.props.onClick(3)}/> 
              </div>
            </div>
        </div>
     
    );
  }
}

export { Question };