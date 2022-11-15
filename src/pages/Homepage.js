import React from 'react'
import Mynavbar from '../components/Navbar'
import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Notice from '../components/Notice'
import WhyChooseUs from '../components/WhyChooseUs'
import LearnFromAnywhere from '../components/LearnFromAnywhere'
import EventAndNews from '../components/EventAndNews'
import Footer from '../components/Footer'
const Homepage = () => {
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
        <Footer/>
    </>
  )
}

export default Homepage