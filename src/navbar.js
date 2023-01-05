import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function NavbarItem() {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <InputGroup className="mb-3">
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
              <div className="circle text-center">0</div>
            </div>

            <div className="d-flex gap-1">
              <img src="/shopping-cart.png" />
              <div className="circle text-center">0</div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarItem;
