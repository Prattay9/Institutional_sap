const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
      
    },
    email:{
        type:String,
        required:true
     
    }
    
})



const User = new mongoose.model("User",userSchema);

module.exports = User;