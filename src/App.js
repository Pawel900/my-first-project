import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm <b>Pawel01</b> who is learning <b>React</b> 🚀
        </a>
        <h1>To jest moja księga gości:</h1>
        <Welcome />
      </header>
    </div>
  );
}

export default App;
