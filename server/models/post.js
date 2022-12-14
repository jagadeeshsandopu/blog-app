const mongoose = require('mongoose');



const PostSchema = new mongoose.Schema({
  
   title:{
       type : String,
   },
   description : {
    type : String,
   },
   username :{
     type :String,
   },
   categories :{
     type : String,
   },
   content:{
    type: String,
   },
   comments:{
    type:[{
      name:String,
      comment:String
    }]
   }
   
},{timestamps:true });

module.exports = mongoose.model("Post", PostSchema);

