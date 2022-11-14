import React from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from './subComponents/CommonButton'
const Notice = () => {
  return (
    <>
        <div className="myContainer">
            <div className="noticepart">
                <h3>Notice</h3>
                <Row className="noticecontent">
                    <Col lg={4}>
                        <div className="noticebox m-auto">
                            <div className="noticeheading">
                                <h4><span>07</span> Nov, 2022 </h4>
                            </div>
                                <p>The school will be off for National Cancer Awareness Day.</p>
                                <p>National Cancer Awareness Day is observed on November
                                7 in India. The day highlights
                                the significance of increased awareness about cancer</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="noticebox m-auto">
                            <div className="noticeheading">
                                <h4><span>14</span> Dec, 2022 </h4>
                            </div>
                                <p>The school will be off for National Cancer Awareness Day.</p>
                                <p>National Cancer Awareness Day is observed on November
                                7 in India. The day highlights
                                the significance of increased awareness about cancer</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="noticebox m-auto">
                            <div className="noticeheading">
                                <h4><span>16</span> Dec, 2022 </h4>
                            </div>
                                <p>The school will be off for National Cancer Awareness Day.</p>
                                <p>National Cancer Awareness Day is observed on November
                                7 in India. The day highlights
                                the significance of increased awareness about cancer</p>
                        </div>
                    </Col>
                    <CommonButton buttonTitle="View All"/>
                </Row>
            </div>

        </div>
    </>
  )
}

export default Notice