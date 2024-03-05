import './App.css';
import Navbar from './components/Navbar.js';
import Homepage from './components/Homepage.js';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
