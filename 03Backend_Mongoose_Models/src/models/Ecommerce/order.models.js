import mongoose  from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productid:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "product",
        require : true,

    },

    quantity :{
        type : Number,
        require : true,
       },
})

const orderSchema = new mongoose.Schema(
    
    {
        coustome:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            require : true,
            
        },

       

       price : {
        type : Number,
        require : true,
       },

       totalPrice : {
        type : Number,
        require : true,
       },

       orderItems : [orderItemSchema],

       orderStatus : {
        type : String,
        enum : ["pending", "Cancelled", "Delivered"],
        default : "pending",
       },


        
    } , {timestamps : true})