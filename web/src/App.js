import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'styled-button';
import { SbabLogo, FileTypeIcon } from 'sbab-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SbabLogo width="100px" height="100px" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Some nice introtext.</p>
        <Button onClick={() => alert(1234)}>Test</Button>
        <div>
          <FileTypeIcon extension="PDF" />
          <FileTypeIcon />
          <FileTypeIcon extension="TXT" />
          <FileTypeIcon extension="DOC" />
        </div>
      </div>
    );
  }
}

export default App;
