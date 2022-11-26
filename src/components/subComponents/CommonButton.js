import React from 'react'

const CommonButton = (props) => {
  

  return (
    <>
        <div className={`read-more navabrbutton ${props.displaynone} ${props.bannerbt} ${props.noticebt} ${props.eventbt}`}>
        <a href="#"><span></span>{props.buttonTitle} <div className="hiddenhover">{props.buttonTitle}</div> </a>
        </div>
    </>
  )
}

export default CommonButton