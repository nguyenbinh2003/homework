import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function NavScrollExample() {
  return (
    <div >
      <Navbar expand="lg" className="bg-warning" style={{ width: "100%" }}>
        <Container fluid>
          <Navbar.Brand href="#">SHOP APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Items"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <BsCart3 style={{ margin: "0 20px", fontSize: "25px" }} />
        <BiUser style={{ fontSize: "25px" }} />
      </Navbar>
    </div>
  );
}

export default NavScrollExample;