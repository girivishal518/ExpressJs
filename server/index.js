// Connecting to MongoDB
import mongoose, { disconnect } from "mongoose";
import { configDotenv } from "dotenv";
import User from './models/user.model.js'
import Connect from "./db/connection.js";
import {app} from "./App.js";

configDotenv({ path: './.env' })
// console.log("Error Kaha h");

Connect().then(()=>{
            app.listen(process.env.PORT||5000, ()=>{
                console.log(`Listening on ${process.env.PORT||5000}`);  
            })
    })
    .catch((err) => {
        console.log("Connection Error", err);
    })












    // console.log(User);

// console.log(process.env.MONGODB_URL);

// mongoose.connect(process.env.COMPASS_CONN).then((conn) => {
//     console.log("Connection....");
//     const myUser = new User({
//         userName: "vishal 9",
//         password: '12334233',
//         email: 'abc@gmail.com'
        
//     })
//     // myUser.collection.insertOne(myUser)
//     myUser.save()
//         .then(() => {
//             console.log("inserted...");
//         })
//         .catch((err) => {
//             console.log("ERROR : ", err);
//             mongoose.connection.close()

//         })
//     // myUser.collection.findOne({userName :'ishal 9'})
//     // .then((data)=>{
//     //     console.log(data);
//     // })
//     // .catch((err)=>{
//     //     console.log("errrr....", err);
        
//     // })
    
    

// })
//     .catch((err) => {
//         console.log("here .. error.....",err);
//     });

