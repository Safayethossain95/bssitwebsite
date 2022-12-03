import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from '../components/subComponents/CommonButton';
import {Link} from 'react-router-dom'
const ForgotPassword = () => {
    
 
  return (
    <>
        <div className="authentication">
        <div className="myContainer">
          <Row>
            <Col lg={6} className="d-flex align-items-center">
                <div className="authlogodiv">
                  <img src="./assets/images/bssloginlogo.png" alt="" />                </div>
            </Col>
            <Col>
                <div className="loginbox">
                  <div className="loginboxinner">
                  <h4>Forget Password</h4>

                  <div className="fieldboxforlogin">
                    <p>Student id</p>
                    <input type="text" />
                    <p>Mobile Number</p>
                    <input type="text" />

                    <ul style={{listStyleType:"disc"}}>
                        <li><p>1. An auto-generated password will send to your mobile number.</p></li>
                        <li><p>2. You can change this auto-generated password by login to your panel and set a new password.</p></li>
                        <li><p>3. You can get this auto-generated password once in a month.</p></li>
                        <li><p>4. If your mobile number is missing, please contact the office for new password.</p></li>

                        



                    </ul>
                    
                    <div className="buttonpartlogin2 text-center">
                      <CommonButton buttonTitle="Get Password"/>
                      <Link className="onlytextlink" to="/login">Back to login</Link>
                    </div>
                  </div>
                  </div>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword