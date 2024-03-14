import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Healthy() {
  return (
    <Navbar className="navbar-healthy">
      <Container className="containerdropdown">
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown id="" title="Healthy Snacks" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">Smoothies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cereal</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Healthy;
