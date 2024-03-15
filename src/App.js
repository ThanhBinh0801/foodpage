import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./file jsx/Contact file/Contact";
import Login from "./file jsx/Login file/Login";
import SearchButton from "./file jsx/Search/Search";
import Menu from "./file jsx/Dropdown/MenuDropDown";
import Home from "./file jsx/FoodHome/HomePage";
import Smooth from "./file jsx/Smoothies/SmoothiesHome";
import FoodForEoss from "./file jsx/FoodForEoss/FoodForEoss"
import Cereal from "./file jsx/CerealHome/CerealHome";
import Cakes from "./file jsx/CakesHome/CakesHome";
import Yogurt from "./file jsx/YogurtHome/YogurtHome";
import DinksForEoss from "./file jsx/DinksForEossHome/DinksForEoss";
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
          <Route path="/FoodForEoss" element={<FoodForEoss />} />
          <Route path="/Cereal" element={<Cereal />} />
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/Yogurt" element={<Yogurt />} />
          <Route path="/DinksForEoss" element={<DinksForEoss />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
