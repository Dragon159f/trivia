import React, { Component } from 'react';
import '../css/QuestionText.css';
// import components


class QuestionTxt extends Component {
  
  render() {
    return (
    <div>
        <h1 id="question">{this.props.text}</h1>  
    </div> 
    );
  }
}

export {QuestionTxt};