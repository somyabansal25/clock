import React from 'react';
import DigitalClock from './clock';
import './App.css';
function App () {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Digital Clock</h1>
            <DigitalClock />
        </header>
    </div>
    );
}
export default App;