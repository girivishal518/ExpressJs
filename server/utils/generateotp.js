import axios from 'axios'
const generateotp = () => {
    const OTP = Math.floor(Math.random() * 10000 + 1);
    return OTP
}


// console.log(process.env.SMS_API_URL, process.env.SMS_API_KEY);

const data = {
    sender_id: 'FSTSMS',       
    message: 'Hello, this is a test message',  
    language: 'english',  
    route: 'p',                
    numbers: '8340553473' 
  };
  const headers = {
    'authorization': process.env.SMS_API_KEY,  
    'Content-Type': 'application/x-www-form-urlencoded'
  };


const sendOTP = async (mobileNo) => {
    const response = await axios.post(process.env.SMS_API_URL,  new URLSearchParams(data).toString(), {headers:headers} )

}


export  {generateotp, sendOTP}