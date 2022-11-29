import React from 'react'
import { Link } from 'react-router-dom';

const CommonButton = (props) => {
  

  return (
    <>
        <div className={`read-more navabrbutton ${props.displaynone} ${props.bannerbt} ${props.noticebt} ${props.eventbt}`}>
        <Link to="/"><span></span>{props.buttonTitle}</Link>
        </div>
    </>
  )
}

export default CommonButton