import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function home() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-control="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
        <Nav
        className="me-auto my-2 my-lg-0"  
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
          <Nav.Link herf="#action1">Home</Nav.Link>
          <Nav.Link herf="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item herf="action5">
            somthing else here
          </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link herf="#" disabled>
            Link
          </Nav.Link>
          </Nav>
          <Form className="D-flex">
            <Form.Control  type="Search" placeholder="Search" className="me-2" aria-label="Search"></Form.Control>
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default home;