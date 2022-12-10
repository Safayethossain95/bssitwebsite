import React,{useEffect} from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import CommonButton from '../subComponents/CommonButton'
import {NavLink,Link} from 'react-router-dom';
import '../../sassFiles/mobile/sassPages/homepage.scss'
import $ from 'jquery'
const NavbarMoblie = () => {
    let activeStyle = {
        color:"#ED1C24"
      };
      useEffect(()=>{
        $(".navbar-toggler").click(function(){
         
          $(".mynavbarnav").toggleClass("show");
          $(".mynavbarmb").toggleClass("navbar-white");
        })
    },[])
    // $(".navbar-toggler").click(function(){
    //   $(".mynavbarmb").toggleClass("navbar-white");
    //   $(".mynavbarnav").toggleClass("show");
    // })
    
  return (
    <>
        <Navbar id="navbarmini" className="mynavbarmb" expand="lg">
            
            <div className="headerwrapper">
                <Navbar.Brand>
                    <Link to="/"><img src="./assets/images/Logo.svg" alt="logo" /></Link>
                </Navbar.Brand>
                <div  className="navbar-toggler" aria-controls="basic-navbar-nav" >
                <div id="nav-icon4">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                </div>
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mynavbarnav">
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
                    <CommonButton classChange="whitebuttonbg" buttonTitle="Bill Pay"/>
                    <CommonButton buttonTitle="Login"/>
                </Nav>
                
                {/* </Navbar.Collapse> */}
            
            </div>
            </Navbar>
    </>
  )
}

export default NavbarMoblie