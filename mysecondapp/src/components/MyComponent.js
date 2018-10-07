import React, { Component } from 'react';
import './../App.css';

class MyComponent extends Component {



  render() {
    const {name,title, onClick} = this.props;

    return (
        <div className="MyComponent">
        <h1> this is a component that is dragged into another</h1>
        <h2> {title} </h2>
        <h2> {name} </h2>
        <div onClick={onClick}>Click me!</div>
        </div>

    )
  }
}

export default MyComponent;
