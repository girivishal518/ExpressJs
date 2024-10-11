import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";


async function userController(req, res,next){
    console.log("here.......");
    // console.log(req.body);
    console.log(req.files);
    
    
    const {userName,email ,phone, password,cpassword}= req.body;

    // if(fullname || email || phone  || password)

    // if(userName == undefined){
    //     res.status(204).send("erorr..")
    //     throw new ApiError(204,"username undefined.." );
        
    // }

 const reqfields = [userName,email,phone,password,cpassword].some((field)=>{
   
        return field == undefined;

        
        
    })

    // console.log('retURNED', reqfields);
    
    if(reqfields){
        res.status(204).send("<h1>required all field...</h1>")
      throw new  ApiError (204,"please fill required field...")

    }


    const existeduser =await User.findOne({
        $or : [{userName},{email}]
    })
    console.log("existed...",existeduser);

    if(existeduser){
        res.status(409).send("<h1>already exist..</h1>")
        // throw new ApiError(409,"user already exist...")
        
    }else {


        const localimage=req.files.avatar[0].path
        const cloudfiles = await uploadOnCloudinary(localimage)
        const image = cloudfiles.url
       await User.create({
        userName:userName,email:email,phone:phone,password:password,cpassword:cpassword,avatar:image  })
            res.status(201).json({
                message:"register....",
                user:{
                    userName,email,phone,password,cpassword
                }
            })
    
    }
    // res.status(200).send("<h1> Registered SuccessFully...</h1>")

}

export default userController;