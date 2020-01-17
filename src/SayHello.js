import React from 'react';
import './SayHello.css';

function Przywitanie(props) {
  return (
    <div className="title">
      <h1 className="imie">Hi, my name is {props.name}.</h1>
      <h2>I'm {props.age}. I want to calculate Your age with function.</h2>
    </div>
  );
}

export default Przywitanie;
