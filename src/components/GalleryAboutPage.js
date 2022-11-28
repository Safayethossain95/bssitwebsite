import React from 'react'
import HeadlineOfOtherPage from './subComponents/HeadlineOfOtherPage'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button} from 'react-bootstrap';
const GalleryAboutPage = () => {
    
    function SampleNextArrow(props) {

        

        const { className, style, onClick } = props;
        return (
            <div
            className="next slick-next"
            onClick={onClick}
            />
            );
        }
        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
              />
            );
          }
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
            nextArrow:<SampleNextArrow/>,
            prevArrow:<SamplePrevArrow/>
          };
  return (
    <>
        <div className="myContainer">
            <div className="galleryaboutpage" style={{padding:"0 50px"}}>
            <HeadlineOfOtherPage headline="Gallery"/>

            
           

                <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
            
           
            </div>
        </div>
    </>
  )
}

export default GalleryAboutPage