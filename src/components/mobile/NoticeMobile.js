import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
const NoticeMobile = () => {
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
        
            <div className="noticemobile" data-aos="fade-up" data-aos-duration="2000">
            <div className="heading">
                        <h4>Notice</h4>
                    </div>
                <Slider {...settings}>
                <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                <div className="noticeheading">
                        <h4><span>07</span> Nov, 2022 </h4>
                    </div>
                        <p>
                        The school will be off for National Cancer Awareness Day. <br/>
                        National Cancer Awareness Day is observed on November <br/>
                        7 in India. The day highlights
                        the significance of increased awareness
                        <br/> about cancer
                        </p>
                </div>
                <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                <div className="noticeheading">
                        <h4><span>07</span> Nov, 2022 </h4>
                    </div>
                        <p>
                        The school will be off for National Cancer Awareness Day. <br/>
                        National Cancer Awareness Day is observed on November <br/>
                        7 in India. The day highlights
                        the significance of increased awareness
                        <br/> about cancer
                        </p>
                </div>
                <div className="noticebox noticeboxleft m-auto">
                            <span></span>
                <div className="noticeheading">
                        <h4><span>07</span> Nov, 2022 </h4>
                    </div>
                        <p>
                        The school will be off for National Cancer Awareness Day. <br/>
                        National Cancer Awareness Day is observed on November <br/>
                        7 in India. The day highlights
                        the significance of increased awareness
                        <br/> about cancer
                        </p>
                </div>
                   
                    </Slider>
            </div>

            

                
                
       
    </>
  )
}

export default NoticeMobile