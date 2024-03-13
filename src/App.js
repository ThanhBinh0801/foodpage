import './App.css';
import {Link, Route, Routes} from "react-router-dom"
// import Popup from './file jsx/Contact file/popupcontact';
import Contact from './file jsx/Contact file/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
