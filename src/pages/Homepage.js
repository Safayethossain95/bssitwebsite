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
  return (
    <>
        <Header/>
        <Mynavbar/>
        <Banner/>
        <AboutUs/>
        <Notice/>
        <WhyChooseUs/>
        <LearnFromAnywhere/>
        <EventAndNews/>
        <ScrollTop/>
        <Footer/>
    </>
  )
}

export default Homepage