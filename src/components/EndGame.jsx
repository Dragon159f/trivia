import React, { Component } from 'react';
import '../css/EndGame.css';
// import components


class EndGame extends Component {

  refresh(){
    window.location.reload();
  }

  render() {
    return (
        <div className="EndGame">
        <p>Good Job!</p>
          <img src="https://media1.tenor.com/images/189c8e2481d9fdf22ab8e5e147987ccc/tenor.gif?itemid=8057549" class="img-fluid" witdh="50px" alt=""/>
          <div>
            <button onClick={()=> this.refresh()} class="btn btn-outline-danger" type="button">Retry</button>
          </div>
        </div> 
     )}
  }

export { EndGame };