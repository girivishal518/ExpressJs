import User from "../models/user.model.js";
// import { sendOTP } from "../utils/generateotp.js";

async function logincontroller(req, res, next) {

    const {email, password}= req.body;  
    // console.log(req.body);
    // console.log(req.files);
    
    

    const user = await User.findOne({
        $and: [{ email }]
    })
    const recheck = await user.comparePassword(password)
    console.log(recheck);
    

    if (user && recheck) {
        console.log("loginnn...");
        // sendOTP(8340553473)
        res.status(201).json({
            message: "resgister sucessfully "
        })

    } else {
        console.log("login falied");
        
        
        res.status(401).json({
            message: "invaild username and password....",
           
        })

    }
}
export default logincontroller;