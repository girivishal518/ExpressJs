import {v2 as cloudinary} from "cloudinary";
import fs from "node:fs";

const uploadOnCloudinary = async(localimage)=>{
    cloudinary.config({
        api_key : process.env.API_KEY,
        cloud_name : process.env.API_CLOUD_NAME,
        api_secret: process.env.API_SECRET

    })

    const response = await cloudinary.uploader.upload(localimage,{
        resource_type:"auto"
    })
    if(response){
        fs.unlinkSync(localimage)
        console.log("deletedd successfully....");
        

    }
    return response
}

export {uploadOnCloudinary}