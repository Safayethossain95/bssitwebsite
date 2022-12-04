import React from 'react'
import {Row,Col} from 'react-bootstrap'
const NoticeMobile = () => {
  return (
    <>
        <div className="mobilecontainer">
            <div className="noticemobile">
            <div className="heading">
                        <h4>Notice</h4>
                    </div>
            </div>

            <Row>
                <Col xs={12}>
                <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                        <div className="noticeheading">
                                <h4><span>07</span> Nov, 2022 </h4>
                            </div>
                                <p>The school will be off for National Cancer Awareness Day.</p>
                                <p>National Cancer Awareness Day is observed on November
                                7 in India. The day highlights
                                the significance of increased awareness about cancer</p>
                      
                        </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default NoticeMobile