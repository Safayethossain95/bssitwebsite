import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
        <div className="headerwrapper">
            <div className="headerinfoleft">
            <BsTelephoneFill/> <span>880247115628</span> <ImLocation/> <span>13, Larmini Street Wari, Dhaka</span>

            </div>
            <div className="headerinforight">
                <Link to="/login">Login</Link> | <Link to="/">Bill Pay</Link>
            </div>
        </div>
    </>
  )
}

export default Header