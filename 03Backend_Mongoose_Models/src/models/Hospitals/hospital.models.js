import mongoose from "mongoose";

const hospitalShema = new mongoose.Schema(
    {

        name : {
            type : String,
            required : true 
        },
        address : {
            type : String,
            required : true
        }


    } , {timestamps : true})

const Hospital = mongoose.model("Hospital", hospitalShema)