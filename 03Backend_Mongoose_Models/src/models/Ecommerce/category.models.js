import mongoose from "mongoose";

const Category = new mongoose.Schema(
    {
        name :{
            type : String,
            require : true,
            
        }
    } , {timestamps : true});