import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
    {

        name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        bloodGroup:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        cintams:{
            type: String,
            required: true
        }


    } , {timestamps : true})

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)