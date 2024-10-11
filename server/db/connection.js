import mongoose from "mongoose";
import { config } from "dotenv";

config({path : './.env'})
// console.log(process.env.COMPASS_CONN);
// console.log(process.env.MONGODB_URL);
// console.log(process.env);

async function Connect()
{
    try {
        const conn = await mongoose.connect(`${process.env.COMPASS_CONN}`)
    }
    catch(err){
        console.log("DataBaseError!!", err);
        mongoose.disconnect();
    }
}
export default Connect