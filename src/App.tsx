import React from 'react';
import TrafficLight from './Components/TrafficLight';
import './App.css';

function App() {
  return (
    <div className="App">
      <TrafficLight initNumber = {0} />
      <TrafficLight initNumber = {2} />
    </div>
  );
}

export default App;
