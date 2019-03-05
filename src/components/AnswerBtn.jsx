import React, { Component } from 'react';
import '../css/AnswerBtn.css';
// import components


class AnswerBtn extends Component {
  render() {
    return (
    <div className="AnswerBtn">
        <button onClick={() => this.props.answer()} class="btn btn-outline-primary btn-lg btn-block" id="answerBtn">
          {this.props.text} 
        </button>
    </div> 
    );
  }
}

export {AnswerBtn};