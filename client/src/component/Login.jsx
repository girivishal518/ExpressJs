import axios from 'axios';
import React from 'react'
import "../css/Form.css"
// import Forgetpassword from "../component/Forgetpassword.jsx"
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate();
    const handlelogin= async(e)=>{
        e.preventDefault();
        try { 
          console.log("login successfully...");
          
        let formData = new FormData(e.target);
        const Data = Object.fromEntries(formData.entries());
        const res = await axios.post("http://localhost:3300/users/login",Data);
        console.log(res);
        
         
        } catch (error) {
        console.log(error);
        alert("invalid username and password")
          
        }
        
        
    }

  return (
    <>
      <form  onSubmit={handlelogin}>
        <h1>Login</h1>
        <label htmlFor="em">email</label>
        <input type="email" id='em' name='email' placeholder='enter email' /><br /><br />
        <a className='forget' onClick={()=>navigate('/forget')}>forgetpassword</a>
        <label htmlFor="ps">Password</label>
        <input type="password" id='ps' name='password' placeholder='enter pasword' /><br /><br />

        <input type="submit" value={"login"} />
        <a>create a new account <button onClick={() => navigate('/')}>SignUp</button></a>
        {/* <Link to={<Forgetpassword/>}>Forgetpassword</Link> */}
       
      </form>
    </>
  )
}

export default Login
