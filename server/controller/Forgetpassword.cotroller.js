import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import sendMailTo from "../services/Gmail.js";

const ForgetpasswordController = async(req, res, next)=>{
    const {email, password, cpass} = req.body;
    const existedUser = User.findOne({email:email})
    if(existedUser){
        await sendMailTo(email, "NOTHING", "BYYYYYYEEE")
        // const newHashedPassword = await bcrypt.hash(password, 10)
        // const data = await existedUser.updateOne({$and : [{password:newHashedPassword}, {cpass:cpass}]})
        // const data = await existedUser.updateOne({password:newHashedPassword})
        // console.log(data);
        res.status(201).json({message:"Password Updated Success"})
    }
    else{
        res.status(404).json({message:"User Not Found"})
    }
}



export default ForgetpasswordController