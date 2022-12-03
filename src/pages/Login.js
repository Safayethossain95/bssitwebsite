import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from '../components/subComponents/CommonButton';
import {Link} from 'react-router-dom'
const Login = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
  };
  return (
    <>
      <div className="authentication">
        <div className="myContainer">
          <Row>
            <Col lg={6} className="d-flex align-items-center">
                <div className="loginlogodiv">
                  <img src="./assets/images/bssloginlogo.png" alt="" />                </div>
            </Col>
            <Col>
                <div className="loginbox">
                  <div className="loginboxinner">
                  <h4>Login</h4>

                  <div className="fieldboxforlogin">
                    <p>User Name</p>
                    <input type="text" />
                    <p>password</p>
                    <input type="text" />

                    <div className="checkboxfull">
                    
                    <input
                      type="checkbox"
                      value={isSubscribed}
                      onChange={handleChange}
                      id="remember"
                      name="subscribe"                        
                    />
                    <span>Remember Me</span>
                  
                    
                    </div>

                    <div className="buttonpartlogin">
                      <CommonButton buttonTitle="Login"/>
                      <Link className="onlytextlink" to="/forgetpassword">Forgot Password?</Link>
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

export default Login