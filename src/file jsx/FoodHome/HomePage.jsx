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
        </Link>
        <div className="detail">
          <div>
            <div>
              <Link to="/Smooth">
                <span>
                  <img src="./imgHome/anhSmoothies.png" alt="" />
                </span>
              </Link>
            </div>
            <div>
              <Link to="/Cereal">
                <span>
                  <img src="./imgHome/anhCereal.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      <div>
        <Link>
          <span>
            <img src="./imgHome/anhSnacksforkids.png" alt="" />
          </span>
        </Link>
        <div className="detail">
          <div>
            <div>
              <Link to="/Cakes">
                <span>
                  <img src="./imgHome/anhCakes.png" alt="" />
                </span>
              </Link>
            </div>
            <div>
              <Link to="/Yogurt">
                <span>
                  <img src="./imgHome/anhYogurt.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      <div>
        <Link>
         
          <span>
            <img src="./imgHome/anhEasyonStomachSnacks.png" alt="" />
          </span>
        </Link>
        <div className="detail">
          <Link to="/FoodForEoss">
       
            <span>
              <img src="./imgHome/anhFoodforEOSS.png" alt="" />
            </span>
          </Link>
          <Link to="/DrinksForEoss">
           
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
