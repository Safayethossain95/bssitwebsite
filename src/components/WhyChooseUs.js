import React from 'react'
import {Row,Col} from 'react-bootstrap'
const WhyChooseUs = () => {
  return (
    <>
        <div className="myContainer">
          <div className="whychooseus">
              <h3>Why Choose Us</h3>
              <div className="wcuheadingp">
                <p>The decision to become an exceptional is a highly personal one, based on a number of factors that you must weigh for yourself. It's not a step to be taken lightly. We are different because</p>
              </div>

              <Row className="wcucontent wcugapup">
                <Col lg={4} md={6} sm={6}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon1.png" alt="" />
                    <p>Encourage contact between Students <br/> and Faculty</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon2.png" alt="" />
                    <p>Develop Reciprocity and cooperation <br/> among students</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                <div className="wcubox">
                    <img src="./assets/images/wcuicon3.png" alt="" />
                    <p>Encourage Active Learning</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} className="wcugapsmall">
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon4.png" alt="" />
                    <p>Encourage contact between Students <br/> and Faculty</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} className="wcugapsmall">
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon5.png" alt="" />
                    <p>Develop Reciprocity and cooperation <br/> among students</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={6} className="wcugapsmall">
                <div className="wcubox">
                    <img src="./assets/images/wcuicon6.png" alt="" />
                    <p>Encourage Active Learning</p>
                  </div>
                </Col>
              </Row>
              {/* <Row  className="wcucontent wcugapsmall">
                <Col lg={4}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon4.png" alt="" />
                    <p>Encourage contact between Students <br/> and Faculty</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="wcubox">
                    <img src="./assets/images/wcuicon5.png" alt="" />
                    <p>Develop Reciprocity and cooperation <br/> among students</p>
                  </div>
                </Col>
                <Col lg={4}>
                <div className="wcubox">
                    <img src="./assets/images/wcuicon6.png" alt="" />
                    <p>Encourage Active Learning</p>
                  </div>
                </Col>
              </Row> */}
          </div>
        </div>
    </>
  )
}

export default WhyChooseUs