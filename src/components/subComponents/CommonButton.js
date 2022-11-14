import React from 'react'
import {Button} from 'react-bootstrap'
const CommonButton = (props) => {
  return (
    <>
        <div className="common_button">
            <Button>{props.buttonTitle}</Button>
        </div>
    </>
  )
}

export default CommonButton