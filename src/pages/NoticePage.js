import React from 'react'
import Header from '../components/Header'
import LatestNoticeNoticePage from '../components/LatestNoticeNoticePage'
import Mynavbar from '../components/Navbar'
import HeadlineOfOtherPage from '../components/subComponents/HeadlineOfOtherPage'

const NoticePage = () => {
  return (
    <>
        <Header/>
        <Mynavbar/>
        <HeadlineOfOtherPage headline="Notice"/>
        <LatestNoticeNoticePage/>
        
    </>
  )
}

export default NoticePage