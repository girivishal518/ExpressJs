import bcrypt from "bcryptjs";
import mongoose, { Types } from "mongoose";
import jwt from 'jsonwebtoken';

 
const UserSchema = new mongoose.Schema(
    {

        userName: {
            type: String,
            required: true,
            default: "Vishal",
        },
        email: {
            type: String,
            required: true,
            default: "abc@gmail.com"
        },
        phone: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        cpassword: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: "https://www.pdfgear.com/pdf-converter/img/how-to-convert-jpg-to-pdf-on-mac-1.png",
            required: Array,
        }



    },
    {
        timestamps: true,
    })

UserSchema.pre("save", async function (next) {

    console.log(this.password, "while save");
    if (!this.isModified("password") && this.isNew) {
        next()
    }
    try {

        this.password = await bcrypt.hash(this.password, 10)
        this.cpassword = await bcrypt.hash(this.cpassword, 10) //"$2a$10$sa3Ps7ro4yzMl11OiUrPO.7V6BGMsdvIgbDkALmeg/AVYq2kN2KVK
    }
    catch (err) {
        throw err;
    }
});
// UserSchema.pre(['updateOne', 'findOneAndUpdate'], async function (next) {
//     console.log("Callled while Updating .....");
//     console.log(password);
//     if (this.isNew) {
//         next()
//     }
//     try {
//         console.log("Cg .....");
//         this.password = await bcrypt.hash(this.password, 10)
//         this.cpassword = await bcrypt.hash(this.cpassword, 10)
//     }
//     catch (err) {
//         throw err;
//     }
// });

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}


UserSchema.methods.generateRefreshToken = function () {
    jwt.sign({
        userName: this.userName,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiryTime: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("dics", UserSchema);
export default User    