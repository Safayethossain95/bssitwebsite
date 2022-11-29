import React,{useEffect} from 'react'
import AddressCards from '../components/AddressCards'
import GalleryAboutPage from '../components/GalleryAboutPage'
import Header from '../components/Header'
import Mynavbar from '../components/Navbar'
import OurMethodAboutPage from '../components/OurMethodAboutPage'
import OurMissionAboutUs from '../components/OurMissionAboutUs'
import OurObjectiveAboutUsPage from '../components/OurObjectiveAboutUsPage'
import OurVisionAboutUsPage from '../components/OurVisionAboutUsPage'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'
import TransportServiceAboutUsPage from '../components/TransportServiceAboutUsPage'
import Footer from '../components/Footer'
import ScrollTop from '../components/subComponents/ScrollTop'
const AboutUsPage = () => {
  useEffect(()=>{
    
    
    var navbar = document.getElementById("navbar");
    var headline = document.getElementById("myheadline");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        headline.classList.add("headlinemargin")
      } else {
        navbar.classList.remove("sticky");
        headline.classList.remove("headlinemargin")
      }
    }
    window.onscroll = function() {myFunction()};
    

  },[])
  return (
    <>
        <div className="aboutpage">
            <Header/>
            <Mynavbar/>
            <HeadlineOfOtherPage headline="About Us"/>
            <OurMissionAboutUs/>
            <OurMethodAboutPage/>
            <OurVisionAboutUsPage/>
            <OurObjectiveAboutUsPage/>
            <TransportServiceAboutUsPage/>
            <AddressCards/>
            <GalleryAboutPage/>
            <ScrollTop/>
            <Footer/>
        </div>
    </>
  )
}

export default AboutUsPage