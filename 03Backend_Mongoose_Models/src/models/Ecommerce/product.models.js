import mongoose from "mongoose";

const product = new mongoose.Schema(
    {
        prodctName :{
            type : String,
            require : true,
            
        },

        price :{
            type : Number,
            require : true,
            
        },

        description :{
            type : String,
            require : true,
            
        },
        
        category :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Category",
            require : true,
            
        },


        
        
        
    } , {timestamps : true})