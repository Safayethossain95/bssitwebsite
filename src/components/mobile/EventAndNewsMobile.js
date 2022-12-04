import React from 'react'
import {Row,Col} from 'react-bootstrap'
const EventAndNewsMobile = () => {
  return (
    <>
        <div className="mobilecontainer">
            <div className="eventandnewsmobile">
                <div className="heading">
                        <h4>Event & News</h4>
                    </div>

                    <Row>
                        <Col xs={12}>
                        <div className="eventcardwrapper">
                        <div className="eventcard firstoneev">
                            <div className="eventcardimg">
                            <img src="./assets/images/mobile/eventcardpic1.png" alt="eventcardpic" />
                            <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                            </div>
                            <div className="eventcardtext">
                            <h4>Class 3 students working on their science project</h4>
                            <p>To improve the human resources by educating them on all round development of human being i.e. <br/> - development of all four levels</p>

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

export default EventAndNewsMobile