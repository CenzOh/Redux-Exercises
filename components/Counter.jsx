// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick = {onClear}> Clear </button>
    <button onClick = {onIncrementBy}> Increment by 5 </button>
  </div>
);

export default Counter;
