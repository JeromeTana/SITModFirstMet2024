import React from 'react'
import './FallingObjectBackground.css'

const FallingObjectBackground = ({children, image}) => {

  return (
    <div className='background'>
      <div className='object'><img src={image} alt=''/></div>
      <div className='object'><img src={image} alt=''/></div>
      <div className='object'><img src={image} alt=''/></div>
      <div className='object'><img src={image} alt=''/></div>

      {children}
    </div>
  )
}

export default FallingObjectBackground