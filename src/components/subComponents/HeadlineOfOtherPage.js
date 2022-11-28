import React from 'react'

const HeadlineOfOtherPage = (props) => {
  return (
    <>
        <div className="myheadline">
            <h1>{props.headline}</h1>
        </div>
    </>
  )
}

export default HeadlineOfOtherPage