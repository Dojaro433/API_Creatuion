const mongoose = require("mongoose");




const userSchema = mongoose.Schema(


    {
 
         
        firstName:"String",
        lastName:"String",
        mobNumber:Number,
        password:"String"
 
        }




)

module.exports = mongoose.model("vairs", userSchema);