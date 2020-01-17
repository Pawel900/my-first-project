import React from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, my name is Pawel.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm learning React.
        </a>
        <SayHello name="Pawel" age={15} />
      </header>
    </div>
  );
}

export default App;
