const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcrypt") 

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required: true,
    },
    email : {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please enter an email'],
        trim: true,
        validator: [isEmail, 'Please enter valid email']
    },
    password:
    {
        type:String,
        required:[true, 'Please enter a password'],
        minLength: [6, 'Minimum password length is 6 characters']
    }
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


const User = mongoose.model("user", userSchema)