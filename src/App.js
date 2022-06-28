import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

// Commented out code still needs to be started in order to render to the app.

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
