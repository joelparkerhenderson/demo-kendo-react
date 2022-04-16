import React, {Component} from 'react';
import {
  Link,
  Outlet,
} from 'react-router-dom';
import { Calendar } from '@progress/kendo-react-dateinputs';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Demo</h1>
      <nav>
        <ul>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/demo-calendar">Demo Calendar</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
