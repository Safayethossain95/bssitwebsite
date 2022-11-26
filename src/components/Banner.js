import React,{useEffect} from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import CommonButton from './subComponents/CommonButton';
import $ from 'jquery';
const Banner = () => {
  useEffect(()=>{
    // const buttons = document.querySelectorAll("button");
    // buttons.forEach((btn) => {
    //   btn.addEventListener("mouseenter", function (e) {
    //     let x = e.clientX - e.target.offsetLeft;
    //     let y = e.clientY - e.target.offsetTop;
  
    //     let ripples = document.createElement("span");
    //     ripples.style.left = x + "px";
    //     ripples.style.top = y + "px";
    //     this.appendChild(ripples);
  
    //     setTimeout(() => {
    //       ripples.remove();
    //     }, 1000);
    //   });
    // });

    
  },[])
  return (
    <div className="myContainer">
        <div className="mybanner">
        <Row>
            <Col lg={8} className="bannertext">
              <div className="bntxinner">
                <h3>Welcome to <br/> <p>British Standard School</p>   </h3>
                <p>"Education is the manifestation of perfection already in man." It is true that every individual has education in them but it is the school that gives them the shape to become the enlightened one. So join school, join BSS!!</p>

              </div>
                <CommonButton bannerbt="bannerbutton" buttonTitle="Learn More"/>
                

                
                <div className="bannersmallboxwrapper">
                                  
                 <Row>
                  <Col lg={4} xs={12} className="bannersmallboxcenter">
                    <div className='bannersmallbox' >         
                        <img src="./assets/images/smallvectorbanner1.png" alt="" />
                        <p><span>1000+</span>"Student from all over the Dhaka city"</p>
                    </div>                  
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter">
                  <div className='bannersmallbox gap' >         
                      <img src="./assets/images/smallvectorbanner2.png" alt="" />
                      <p><span>1000+</span>"Student from all over the Dhaka city"</p>
                  </div>
                  </Col>
                  <Col lg={4} xs={12} className="bannersmallboxcenter">
                    <div className='bannersmallbox gap2' >         
                        <img src="./assets/images/smallvectorbanner3.png" alt="" />
                        <p><span>1000+</span>"Student from all over the Dhaka city"</p>
                    </div>
                  </Col>
                 </Row>
                </div>
            </Col>
            <Col lg={4} className="main_image">
                <img src="./assets/images/Main_Image.png" alt="main_image" />
                
            </Col>
        </Row>

        <div className="bannerbgimg">
                  <img src="./assets/images/BG_Logo_full.png" alt="" />

                  </div>
        </div>
    </div>
  )
}

export default Banner