import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar className="navbar-custom">
      <Container className="containerdropdown">
        <Navbar.Collapse>
          <Nav>
            <NavDropdown id="" title="Menu" menuVariant="dark">
              <NavDropdown
                title={<span style={{ color: "white" }}>Healthy Snacks</span>}
                menuVariant="light"
                className="DropHealthy"
              >
                <NavDropdown.Item ><Link to='/Smooth'>Smoothies</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to='/Cereal'>Cereal</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<span style={{ color: "white" }}>Snacks For Kids</span>}
                menuVariant="light"
                className="DropHealthy"
              >
                <NavDropdown.Item ><Link to='/Cakes'>Cakes</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to='/Yogurt'>Yogurt</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<span style={{ color: "white" }}>Easy On Stomach Snacks</span>}
                menuVariant="light"
                className="DropHealthy"
              >
                <NavDropdown.Item ><Link to='/FoodForEOSS'>FoodForEOSS</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to='/Yogurt'>DrinkForEOSS</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="#action/3.4">Smoothies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
