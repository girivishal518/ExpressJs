// import nodemailer from 'nodemailer'
import * as email from 'emailjs'
import { configDotenv } from 'dotenv';
import { generateotp } from '../utils/generateotp.js';

// configDotenv({
//     path: '../.env'
// })
console.log(process.env.SENDER_EMAIL, process.env.SENDER_PASSWORD);

const sender = new email.SMTPClient({
    user: process.env.SENDER_EMAIL,
    password: process.env.SENDER_PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
});

const sendMailTo = async (to, subject, text) => {
    const OTP = generateotp()
    console.log("OTP : ", OTP);
    console.log(to);
    
    
    await sender.send(
        {
            text: `Hello Jii Kaise Ho YOUR OTP : ${OTP}`,
            from: process.env.SENDER_EMAIL,
            to: to,
            cc: process.env.SENDER_EMAIL,
            subject: 'MAHAVIRWA',

        },
        (err, data) => {
            if (err || data) {
                console.log(err || data);
            }
        }
    )
}
export  default sendMailTo