import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
                <NavDropdown.Item href="">Smoothies</NavDropdown.Item>
                <NavDropdown.Item href="">Cereal</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="#action/3.2">
                Snacks for kids
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Easy on stomach snacks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Smothies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
