import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
import {NavLink,Link} from 'react-router-dom';
const Mynavbar = () => {
    let activeStyle = {
    color:"#ED1C24"
  };
  return (
    <>
        <Navbar id="navbar" className="mynavbar" expand="lg">
            
            <div className="headerwrapper">
                <Navbar.Brand>
                    <Link to="/"><img src="./assets/images/Logo.svg" alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" 
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>Home
                    </NavLink>
                    <NavLink to="/aboutus" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >About Us</NavLink>
                    <NavLink to="/notice" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Notice</NavLink>
                    <NavLink to="/planner" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Planner</NavLink>
                    <NavLink to="/career" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Career</NavLink>
                    <NavLink to="/contact" style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >Contact</NavLink>
                    
                </Nav>
                <CommonButton buttonTitle="Admission"/>
                </Navbar.Collapse>
            
            </div>
            </Navbar>
    </>
  )
}

export default Mynavbar