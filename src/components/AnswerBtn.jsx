import React, { Component } from 'react';
import '../css/AnswerBtn.css';
// import components


class AnswerBtn extends Component {
  render() {
    return (
    <div className="AnswerBtn">
        <button onClick={() => this.props.answer()} class={this.props.class} id={this.props.id}>
          {this.props.text} 
        </button>
    </div> 
    );
  }
}

export {AnswerBtn};