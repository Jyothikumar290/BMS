import React from 'react'
import {BsSearch} from 'react-icons/bs';
function header() {
  return (
    <div className='main'>
      <div className='sub-main-1'>
      <div className='main-1'>
        <h3>It All Start's Here!</h3>
        <h4>Hyderabad!</h4>
      </div>
      <div className='main-2'>
      <button className='button' type="button">Use App</button>
      <div className='icon'><BsSearch/></div>
      
      </div>
      </div>
    </div>
  )
}

export default header