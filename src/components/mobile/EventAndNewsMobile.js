import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
const EventAndNewsMobile = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
      };
  return (
    <>
        <div className="mobilecontainer2">
            <div className="eventandnewsmobile" data-aos="fade-up" data-aos-duration="2000">
                <div className="heading">
                        <h4>Event & News</h4>
                    </div>

                   
                        <Slider {...settings}>
                            
                                <div className="eventcardwrapper">
                                <div className="eventcard ">
                                    <div className="eventcardimg2">
                                    <img src="./assets/images/mobile/eventcardpic1.png" alt="eventcardpic" />
                                    <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                                    </div>
                                    <div className="eventcardtext">
                                    <h4>Class 3 students working on their science project</h4>
                                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>

                                    </div>
                                </div>

                            
                            </div>
                       
                                <div className="eventcardwrapper">
                                <div className="eventcard ">
                                    <div className="eventcardimg2">
                                    <img src="./assets/images/mobile/eventcardpic1.png" alt="eventcardpic" />
                                    <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                                    </div>
                                    <div className="eventcardtext">
                                    <h4>Class 3 students working on their science project</h4>
                                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="eventcardwrapper">
                                <div className="eventcard ">
                                    <div className="eventcardimg2">
                                    <img src="./assets/images/mobile/eventcardpic1.png" alt="eventcardpic" />
                                    <div className="evcardlabel"><p>OCT 23, 2022</p></div>
                                    </div>
                                    <div className="eventcardtext">
                                    <h4>Class 3 students working on their science project</h4>
                                    <p>To improve the human resources by educating them on all round development of human being i.e. - development of all four levels</p>

                                    </div>
                                </div>
                            </div>
                            
                            </Slider>
                        
            </div>
        </div>
    </>
  )
}

export default EventAndNewsMobile