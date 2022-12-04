import React,{useEffect} from 'react'
import Mynavbar from '../components/Navbar'
import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Notice from '../components/Notice'
import WhyChooseUs from '../components/WhyChooseUs'
import LearnFromAnywhere from '../components/LearnFromAnywhere'
import EventAndNews from '../components/EventAndNews'
import Footer from '../components/Footer'
import $ from 'jquery';
import ScrollTop from '../components/subComponents/ScrollTop'
import NavbarMoblie from './../components/mobile/NavbarMoblie';
import BannerMobile from '../components/mobile/BannerMobile'
import AboutUsMobile from '../components/mobile/AboutUsMobile'
import WhyChooseUSMobile from '../components/mobile/WhyChooseUSMobile'
import EventAndNewsMobile from '../components/mobile/EventAndNewsMobile'
import LearnFromAnywhereMobile from '../components/mobile/LearnFromAnywhereMobile'
import FooterMobile from '../components/mobile/FooterMobile'
import NoticeMobile from '../components/mobile/NoticeMobile'

const Homepage = () => {
  useEffect(()=>{
    
    
    var navbar = document.getElementById("navbar");
    var homepagemargin = document.getElementById("bntxinner");
    
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        homepagemargin.classList.add("headlinemargin")
        
      } else {
        navbar.classList.remove("sticky");
        homepagemargin.classList.remove("headlinemargin")
        
      }
    }
    window.onscroll = function() {myFunction()};
    

  },[])
  useEffect(()=>{
    $(function noticehover() {
      
      let x,y;
      $(".noticebox").on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
          top: y,
          left: x
        });
      });
      $(".noticebox").on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
          top: y,
          left: x
        });
      });
    });
  })
  
 
useEffect(()=>{


  var navbar2 = document.getElementById("navbarmini");
  
  
  var sticky = navbar2.offsetTop;

  
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar2.classList.add("sticky2");
     
      
    } else {
      navbar2.classList.remove("sticky2");
     
      
    }
    if (window.pageYOffset >= 100) {
      navbar2.classList.add("sticky2shadow");
     
      
    } else {
      navbar2.classList.remove("sticky2shadow");
     
      
    }
  }
  window.onscroll = function() {myFunction()};
  

},[])
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
  return (
    <>
        <div className="mobile">
          <NavbarMoblie/>
          <BannerMobile/>
          <AboutUsMobile/>
          <WhyChooseUSMobile/>
          <EventAndNewsMobile/>
          <NoticeMobile/>
          <LearnFromAnywhereMobile/>
          <FooterMobile/>
        </div>
        <div className="desktop">
          <Header/>
          <Mynavbar/>
          <Banner/>
          <AboutUs/>
          <WhyChooseUs/>
          <EventAndNews/>
          <Notice/>
          <LearnFromAnywhere/>
          <ScrollTop/>
          <Footer/>

        </div>
    </>
  )
}

export default Homepage