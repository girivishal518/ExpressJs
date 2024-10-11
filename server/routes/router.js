import { Router } from "express";
import userController from "../controller/user.controller.js";
import logincontroller from "../controller/logincontroller.js";
import upload from "../utils/Multer.js";
import ForgetpasswordController from "../controller/Forgetpassword.cotroller.js";
const router = Router()
router.route("/").get() 
router.route('/submit').post(
    upload.fields([
        {
            name: "avatar",
            maxCount:1,
        }
        ]),

    userController)

    router.route('/login').post(logincontroller);
    router.route('/forget').put(ForgetpasswordController)



export default router;