import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import "../css/Form.css"
import Login from './Login'
const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    let formData = new FormData(e.target)
    const Data = Object.fromEntries(formData.entries());
    const res = await axios.post("http://localhost:3300/users/submit", Data,{
      headers:{
        'Content-Type':'multipart/form-data',
      }
      
    });
    console.log(res);
    
  //  const submit = res.data.message;
  //  console.log(submit);
  //  if (submit) {
  //   const ok = confirm("Submit Sucessfully...")
  //   if (ok) {
  //     window.location.href='/Login';
  //   }else{
  //     window.location.href='/'
  //   }
  //  }
   
    
    console.log(Data);
  }catch(err){
    console.log("errrrr....",err);
    alert("already exist....");
    
  }

  }
  const navigate = useNavigate()

  return (
    <>
      <form onSubmit={handleSubmit} >
      <h1>SingUp</h1>
        <label htmlFor="user">userName</label>
        <input type="text" id='user' name='userName' placeholder='enter userName ' /><br /><br />

        <label htmlFor="em">Email</label>
        <input type="email" id='em' name='email' placeholder='enter email ' /><br /><br />

        <label htmlFor="ph">phone </label>
        <input type="tel" id='ph' name='phone' placeholder='enter phone number ' /><br /><br />

        <label htmlFor="ps">password</label>
        <input type="password" id='ps' name='password' placeholder='enter password ' /><br /><br />

        <label htmlFor="cps">confirm password</label>
        <input type="password" name="cpassword" id="cps"  placeholder='enter confirm password'/><br /><br />

        <label htmlFor="image">upload image</label>
        <input type="file" name="avatar" id="image"  placeholder='enter confirm password'/><br /><br />


        <input type="submit" value={"submit"}/>
        <a>already have an accouunt  <button onClick={() => navigate("/Login")}>login</button></a>
      </form>
    </>
  )
}

export default Form
