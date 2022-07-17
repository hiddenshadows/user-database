
import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { getAuth } from "firebase/auth";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";





function Header() {
  
  const auth = getAuth();
  // const user = auth.currentUser;
  const [user, loading, error] = useAuthState(auth);
  // const [loggedin, setLoggedin] = useState=(
    
  // )
  let loggedin =
    <Nav>
      <Button href="login" variant="outline-light" className="mx-2" >Login</Button>
      <Button href="register" variant="warning">Sign Up</Button>
    </Nav> 
  console.log(user)

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user){
      loggedin =
        <Nav>
          <Button href="login" variant="outline-light" className="mx-2" >Logged in as</Button>
          {/* <Image rounded="true" src={user.photoURL}/> */}
          <DropdownButton id="dropdown-basic-button" title={user.displayName}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
          </DropdownButton>
        </Nav> 
    } else {
      loggedin =
        <Nav>
          <Button href="login" variant="outline-light" className="mx-2" >Login</Button>
          <Button href="register" variant="warning">Sign Up</Button>
        </Nav> 
    }
  }, [user, loading]);

  // if (user) {
  //   loggedin =
  //   <Nav>
  //     <Button href="login" variant="outline-light" className="mx-2" >Logged in as</Button>
  //     {/* <Image rounded="true" src={user.photoURL}/> */}
  //     <DropdownButton id="dropdown-basic-button" title={user.displayName}>
  //       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  //       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  //       <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
  //     </DropdownButton>
  //   </Nav> 
  // } 

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
            
          {loggedin}
        
        </Container>
      </Navbar>
    
    </div>
  );
}

export default Header;