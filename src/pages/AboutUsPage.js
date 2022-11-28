import React from 'react'
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

const AboutUsPage = () => {
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
        </div>
    </>
  )
}

export default AboutUsPage