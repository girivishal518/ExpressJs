import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Forgetpassword() {
  const navigate = useNavigate();
  const [isOTPSent, setIsOTPSent] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const res = await axios.put("http://localhost:3300/users/forget", data);
      console.log(res);
      console.log(data);


    } catch (err) {
      console.log(err, "errroror");

    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Forget Password</h1>
        <label htmlFor="em">Email</label>
        <input type="email" id='em' name='email' placeholder='enter email' /><br /><br />
        <label htmlFor="otp">otp</label>

        <input type="number" id='otp' name='otp' placeholder='enter otp here..' /><br /><br />
        <button>submit</button>

        {
          isOTPSent &&
          <>
            <label htmlFor="ps">New Password</label>
            <input type="password" id='ps' name='password' placeholder='enter new password' /><br /><br />
            <label htmlFor="cps">Confirm password</label>
            <input type="password" id='cps' name='cpass' placeholder='enter confirm password' /><br /><br />
            <input type="submit" value={"submit"} />
          </>
        }
        <a>create new account<button onClick={() => navigate('/')}>SignUp</button></a>
      </form>
    </>
  )
}

export default Forgetpassword
