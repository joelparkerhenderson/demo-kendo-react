import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Demo</h1>
      <Link to="/hello">Hello</Link>
    </div>
  );
}

export default App;
