import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <div>
        <Link>Healthy Snacks</Link>
        <div className="detail">
          <Link to="Smothies">Smoothies</Link>
          <Link to="/Cereal">Cereal</Link>
        </div>
      </div>
      <div>
        <Link>Snacks for kids</Link>
        <div className="detail">
          <Link to="Smothies">Cakes</Link>
          <Link to="/Cereal">Yogurt</Link>
        </div>
      </div>
      <div>
        <Link>East on stomach snacks</Link>
        <div className="detail">
          <Link to="Smothies">Foods for EOSS</Link>
          <Link to="/Cereal">Drinks</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
