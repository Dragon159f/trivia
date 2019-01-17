import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        <h1>Kaboot</h1>
       <Question />
      </div>
    );
  }
}

export default App;