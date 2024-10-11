import express, { Router } from 'express'
import router from './routes/router.js'
import cors from 'cors'
const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
// app.get('/',(req , res,next)=>{
// res.send('<h1>ready to gooo🚀🚀...</h1>')
// next()
// })

// app.get ('/login',(req, res)=>{
//     res.send("<h1>this is login here......</h1>")
//     res.status(200)
// })

app.use('/users' , router)



export  {app}