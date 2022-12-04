import React from 'react'
import CommonButton from '../subComponents/CommonButton'

const BannerMobile = () => {
    
  return (
    <>
    <div className="mobilecontainer">
        <div className="bannermobile">
        <div className="bannermobilebg">
            <img src="./assets/images/mobile/BG_Logo_full.png" alt="BG_Logo_full" />
        </div>
            <div className="bannermobileimg">
                <img src="./assets/images/mobile/homepagemobilemainimg.png" alt="homepagemobilemainimg" />
                <div className="bluroverlay">

                </div>
                <div className="bannermobileimgoverlay">
                    <div className="textpartov">
                    <h4>Welcome to</h4>
                    <p>British Standard School</p>

                    </div>
                    <div className="textparagraph">
                        <p>"Education is the manifestation of perfection already in man." It is true that every individual has education in them but it is the school that gives them the shape to become the enlightened one. So join school, join BSS!!</p>
                    </div>
                    <CommonButton buttonTitle="Learn More"/>
                </div>


            </div>

            <div className="bannercardssmall">
                <div className="bannercardsmallsinglebox">
                    <img src="./assets/images/mobile/smallvectorbanner1.png" alt="" />
                    <h4>1000+</h4>
                    <p className='removegap'>Student from all over the Dhaka city</p>
                </div>
                <div className="bannercardsmallsinglebox smgap1">
                    <img src="./assets/images/mobile/smallvectorbanner2.png" alt="" />
                    
                    <p><span>5</span> Student from all over the Dhaka city</p>
                </div>
                <div className="bannercardsmallsinglebox smgap2">
                    <img src="./assets/images/mobile/smallvectorbanner1.png" alt="" />
                    <p><span>50+</span>  Expert teacher teaches our students</p>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default BannerMobile