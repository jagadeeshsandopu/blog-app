const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
  
   username :{
       type : String,
       requried : true,
       unique :true
   },
   email : {
    type : String,
    requried : true,
    unique :true
   },
   password :{
     type :String,
     required :true
   },
   profilepic :{
     type : String,
     default : ""
    }
   
},{timestamps:true });

module.exports = mongoose.model("User", UserSchema);

