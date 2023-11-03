import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname:{
            type : String,
            require : true,
            minlength : 5,
            maxlength : 300,
        },

        mobileNumber:{
            type:Number,
            require:true,
            unique : true,

        },
        email:{
            type : String,
            require : true,
            lowercase : true,
            unique : true
        },

        password:{
            type : String,
            require : true,
            unique : true,
            minlength : 6,
            maxlength : 30,
        }


    } ,{timestamps:true})

    export const User = mongoose.model("User" , userSchema);