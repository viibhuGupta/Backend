import mongoose  from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content : {
            type : String ,
            require : true,
            minlength : 5,
            maxlength : 300,
        },

        completed : {
            type : Boolean,
            default : false,
        },

        createdby : {
            Type: mongoose.Schema.Types.ObjectId,
            ref : "User",
        },

        subTodo : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "SubTodo"
            }
        ]  // Array of SubTodos



    } ,{ timestamps : true});

    export const Todo = mongoose.model("Todo", todoSchema)