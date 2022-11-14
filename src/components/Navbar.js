import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
const Mynavbar = () => {
  return (
    <>
        <Navbar className="mynavbar" expand="lg">
            
            <div className="headerwrapper">
                <Navbar.Brand href="#home">
                    <img src="./assets/images/Logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Notice</Nav.Link>
                    <Nav.Link href="#link">Planner</Nav.Link>
                    <Nav.Link href="#link">Career</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    
                </Nav>
                <CommonButton buttonTitle="Admission"/>
                </Navbar.Collapse>
            
            </div>
            </Navbar>
    </>
  )
}

export default Mynavbar