import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="homepage">
      <br />
      <div>
        <Link className="HealthySnacksName">
          <div className="Healthyimgbox">
            <img src="./imgHome/anhmenuchinh.png" alt="" />
          </div>
          <div className="Healthytitle"><span >Healthy Snacks</span></div>
        </Link>
        <div className="detail">
          <Link to="/Smooth">
            <span>Smoothies</span>
            <span>
              <img src="./imgHome/anhSmoothies.png" alt="" />
            </span>
          </Link>
          <Link to="/Cereal">
            <span>Cereal</span>
            <span>
              <img src="./imgHome/anhCereal.png" alt="" />
            </span>
          </Link>
        </div>
      </div> <br />
      <div>
        <Link>
          <span>Snacks for Kids</span>
          <span>
            <img src="./imgHome/anhSnacksforkids.png" alt="" />
          </span>
        </Link>
        <div className="detail">
          <Link to="/Cakes">
            <span>Cakes</span>
            <span>
              <img src="./imgHome/anhCakes.png" alt="" />
            </span>
          </Link>
          <Link to="/Yogurt">
            <span>Yogurt</span>
            <span>
              <img src="./imgHome/anhYogurt.png" alt="" />
            </span>
          </Link>
        </div>
      </div> <br />
      <div>
        <Link>
          <span>Eat on stomach snacks</span>
          <span>
            <img src="./imgHome/anhEasyonStomachSnacks.png" alt="" />
          </span>
        </Link>
        <div className="detail">
          <Link to="/FoodForEoss">
            <span>Foods for EOSS</span>
            <span>
              <img src="./imgHome/anhFoodforEOSS.png" alt="" />
            </span>
          </Link>
          <Link to="/DrinksForEoss">
            <span>Drinks</span>
            <span>
              <img src="./imgHome/anhDrinks.png" alt="" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
