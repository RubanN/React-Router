// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { About } from './components/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

      </Routes>

    </div>
  );
}

export default App;
