import mongoose from "mongoose";
const {Schema}=mongoose

const userSchema = new Schema({
    firstName:{type:String,required:true},
    lastName:String,
    email:{type:String,required:true},
    phone:Int

})
