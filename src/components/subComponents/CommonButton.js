import React from 'react'
import {Button} from 'react-bootstrap'
const CommonButton = (props) => {
  return (
    <>
        <div className={`common_button navabrbutton ${props.displaynone}`}>
            <Button>{props.buttonTitle}</Button>
        </div>
    </>
  )
}

export default CommonButton