import React from 'react';

function SayHello(props) {
  return (
    <div>
      <h1>Witam {props.name}</h1>
      <h2>Mam {props.age} lat</h2>
    </div>
  );
}

export default SayHello;
