import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Popup from './file jsx/Contact file/popupcontact';
import Contact from "./file jsx/Contact file/Contact";
import Login from "./file jsx/Login file/Login";
import SearchButton from "./file jsx/Search/Search";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navheader">
          <Link to="/SearchButton">Search</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/SearchButton" element={<SearchButton />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
