import React from 'react'
import './Wrapper.scss'

export default  (props) => {
  return (
    <div className="Wrapper">
      {props.children}
    </div>
  )
}
