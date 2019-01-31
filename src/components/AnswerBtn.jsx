import React, { Component } from 'react';
// import components


class AnswerBtn extends Component {
  
  render() {
    return (
    <div className="AnswerBtn">
        <button id="answerBtn">{this.props.text}</button>
    </div> 
    );
  }
}

export {AnswerBtn};