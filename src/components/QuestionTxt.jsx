import React, { Component } from 'react';
// import components


class QuestionTxt extends Component {
  
  render() {
    return (
    <div>
        <h1>{this.props.text}</h1>  
    </div> 
    );
  }
}

export {QuestionTxt};