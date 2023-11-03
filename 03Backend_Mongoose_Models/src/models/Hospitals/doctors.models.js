import mongoose from "mongoose";

const doctorShema = new mongoose.Schema(
    {

        name:{
            type: String,
            required: true
        },
        spacelist:{
            type: String,
            required: true
        },
        
        branches : {
            type: String,
            required: true
        },
        salary : {
            type : Number,
            required : true
        },

        qualification : {
            type : String,
            required : true
        },

        experienceInYear :{
            type : Number,
            required : true,
            default: 0,
        } ,

        worksInHospitals : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Hospitals"
                
            }
        ]



    } , {timestamps : true})

const Doctors = mongoose.model("Doctors", doctorShema)