import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:[true , " user name required"],
            unique : true,
            lowearcase : true,

        },

        email:{
            type : String,
            required : [true , " Please Enter Email"],
            unique : true,
            lowearcase : true,
        },

        password : {
            type : String ,
            required :[true , " passsword is requried"],
            
        }
    } , {timestamps : true}
    );

export const User = mongoose.model("User" , userSchema);