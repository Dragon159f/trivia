import React, { Component } from 'react';
// import components


class Image extends Component {
  
  render() {
    return (
    <div className="Image">
        <img src={this.props.url} height="300px" width="300px" alt=""/>
    </div> 
    );}
  }

export { Image };