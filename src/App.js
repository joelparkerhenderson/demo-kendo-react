import React, {Component} from 'react';
import { Calendar } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-theme-default/dist/all.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="App">
          <h1>Calendar</h1>
          <Calendar/>
        </div>      
    </div>
  );
}

export default App;
