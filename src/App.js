import "./App.css";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./file jsx/Contact file/Contact";
import Login from "./file jsx/Login file/Login";
import SearchButton from "./file jsx/Search/Search";
import Menu from "./file jsx/Dropdown/MenuDropDown";
import Home from "./file jsx/FoodHome/HomePage";
import Smooth from "./file jsx/Smoothies/SmoothiesHome";
import FoodForEoss from "./file jsx/FoodForEoss/FoodForEoss";
import Cereal from "./file jsx/CerealHome/CerealHome";
import Cakes from "./file jsx/CakesHome/CakesHome";
import Yogurt from "./file jsx/YogurtHome/YogurtHome";
import Detail from "./file jsx/Smoothies/Sinhtobo";
import DrinksForEoss from "./file jsx/DrinksForEossHome/DrinksForEoss";
import { FaCoffee } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <div className="App">
      <div className="header">
        <nav className="navheader">
          <Menu />
          <Link to="/SearchButton">Search</Link>
          <Link to="/" className="FoodShopmenu">
            Food Shop
          </Link>
          <Link to="/contact">Contact</Link>
          {loggedInUser ? ( // Check if user is logged in
            <Link to="/profile">{loggedInUser.Name}</Link> // Display user's name as link
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/SearchButton" element={<SearchButton />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/Smooth" element={<Smooth />} />
          <Route path="login" element={<Login />} />
          <Route path="/Smooth" element={<Smooth />} />
          <Route path="/Smooth/:id" element={<Detail />} />
          <Route path="/FoodForEoss" element={<FoodForEoss />} />
          <Route path="/Cereal" element={<Cereal />} />
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/Yogurt" element={<Yogurt />} />
          <Route path="/DrinksForEoss" element={<DrinksForEoss />} />
        </Routes>
      </div>
      <div>
        <div>
          <div>Store</div>         
          <div>FoodShop</div>
          <div>
            <FaCoffee /> 590 Cach Mang Thang 8, Ward 11, District 3
          </div>
          <div>
            <MdPhone /> +84 123 456 789
          </div>
          <div>
            <MdEmail /> avc@gmail.com
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default App;
