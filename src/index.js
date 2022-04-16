import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './routes/hello';
import DemoCalendar from './routes/demo-calendar';

// React 18 introduces a new root API with a concurrent renderer.
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot(rootElement!) if you use TypeScript

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="hello" element={<Hello />} />
      <Route path="demo-calendar" element={<DemoCalendar />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
