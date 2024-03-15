import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./file jsx/Contact file/Contact";
import Login from "./file jsx/Login file/Login";
import SearchButton from "./file jsx/Search/Search";
import Menu from "./file jsx/Dropdown/MenuDropDown";
import Home from "./file jsx/FoodHome/HomePage";
import Smooth from "./file jsx/Smoothies/SmoothiesHome";
function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navheader">
          <Menu />
          <Link to="/SearchButton">Search</Link>
          <Link to="/Home">Food Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/SearchButton" element={<SearchButton />} />
          <Route path="Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="/smooth" element={<Smooth />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
