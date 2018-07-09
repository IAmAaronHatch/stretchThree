import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Form';

class App extends Component {
  render() {
    return (
      <div className='component' >
      <h1>THIS IS MY APP>JS</h1>
      <NavBar/>
      <Form/>
    </div>
    );
  }
}

export default App;
