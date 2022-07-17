
import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <div className="Header">
      {/* <Navbar sticky="top" /> */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="home">Task Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Button href="login" variant="outline-light" className="mx-2" >Login</Button>{' '}
            <Button href="register" variant="warning">Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
  );
}

export default Header;