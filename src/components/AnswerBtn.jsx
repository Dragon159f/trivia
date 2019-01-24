import React, { Component } from 'react';
// import components


class AnswerBtn extends Component {
  
  render() {
    return (
    <div className="AnswerBtn">
        {this.props.text}
    </div> 
    );
  }
}

export {AnswerBtn};