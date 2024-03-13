import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
// import Popup from './file jsx/Contact file/popupcontact';
import Contact from "./file jsx/Contact file/Contact";
import Login from "./file jsx/Login file/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
