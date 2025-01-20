import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
