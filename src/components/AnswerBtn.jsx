import React, { Component } from 'react';
import '../css/AnswerBtn.css';
// import components


class AnswerBtn extends Component {
  render() {
    return (
    <div className="AnswerBtn">
        <button onClick={() => this.props.answer() || this.props.onButtonClick()} class={this.props.class}>
          {this.props.text} 
        </button>
    </div> 
    );
  }
}

export {AnswerBtn};