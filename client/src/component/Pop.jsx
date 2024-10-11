import React from 'react'
import '../css/Pop.css'
import { MdOutlineCancel } from "react-icons/md";
function Pop() {
  return (
    <>
      <div className='box'>
       <div className='icon'>
       <MdOutlineCancel />

       </div>
       <a className='innerbox'> Thanks for Login. <br></br>Login  Successfull</a>
      </div>
    </>
  )
}

export default Pop
