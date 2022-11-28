import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
import {Link} from 'react-router-dom';
const Mynavbar = () => {
  return (
    <>
        <Navbar id="navbar" className="mynavbar" expand="lg">
            
            <div className="headerwrapper">
                <Navbar.Brand>
                    <Link to="/"><img src="./assets/images/Logo.png" alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="#link">Notice</Link>
                    <Link to="#link">Planner</Link>
                    <Link to="#link">Career</Link>
                    <Link to="#link">Contact</Link>
                    
                </Nav>
                <CommonButton buttonTitle="Admission"/>
                </Navbar.Collapse>
            
            </div>
            </Navbar>
    </>
  )
}

export default Mynavbar