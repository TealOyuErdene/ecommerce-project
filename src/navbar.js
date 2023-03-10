import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarItem() {
  return (
    <>
      <Navbar className="navbar-top">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <InputGroup className="search">
              <Form.Control
                className="searchForm"
                placeholder="Search any things"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button id="button-addon2">search</Button>
            </InputGroup>
          </Nav>
          <div className="d-flex gap-5">
            <img src="/Frame 1.png" />
            <div className="d-flex gap-1">
              <img src="/heart.png" />
              <div className="circle-icon text-center">0</div>
            </div>

            <div className="d-flex gap-1">
              <img src="/shopping-cart.png" />
              <div className="circle-icon text-center">0</div>
            </div>
          </div>
        </Container>
      </Navbar>

      <Navbar className="navbar-bottom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Browse categories"
                id="main-nav-dropdown"
                className="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Home"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Catalog"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Blog"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Pages"
                id="basic-nav-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="#home"
                className="about"
                style={{ marginTop: "8px" }}
              >
                About Us
              </Nav.Link>

              <Nav.Link href="#home" className="nav-right-item">
                30 Days Free Return
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarItem;
