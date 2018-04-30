import React, { Component } from 'react';
import Header from './components/Header/index';
import GeneratedText from './components/GeneratedText/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Kanye-ipsum__container row">
        <Header />
        <GeneratedText />
      </div>
    );
  }
}

export default App;
