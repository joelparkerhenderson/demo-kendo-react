import './App.css';
import {
  Link,
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Demo</h1>
      <nav>
        <Link to="/hello">Hello</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
