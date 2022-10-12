const router = require('express').Router()
const User = require('../models/user');
const jwt = require('jsonwebtoken');


// user registration

router.post('/register', async (req,res) =>{
    try{
       const existinguser = await User.findOne({username:req.body.username})

       if(existinguser)
       {return res.json({result:false})}

        const newUser = new User({
         username : req.body.username,
         email : req.body.email,
         password : req.body.password
       })
       const newuser = await newUser.save(); 
       return res.json({result:true})
      }
    catch(err){
      res.status(500).json({result:false});
    }
})

router.post('/login',async (req,res) => { 
  try{
    user = await User.findOne({'email' : req.body.email});
    if(user)
    {
     if(req.body.password==user.password&&req.body.username ==user.username)
     {
      try{
       const token = jwt.sign({id:user._id}, "secret-password")
       
       res.cookie('acesstoken',token,{httpOnly:true}).send()
      }
      catch(err)
      {res.status(401).json("Error")}
     }
     else
     {res.status(401).json("Invalid credentials");}
    }
    else
    {res.status(401).json("Invalid credentials");}
   }
   catch(err){
     console.log(err);
     res.status(500).json("Invalid credentials");
   }
})

router.get('/logout' , (req,res) =>{
  res.cookie('acesstoken','',{
    httpOnly:true
  }).send()
})

router.get('/loggedIn', async (req,res) =>{
 try{
  const token = req.cookies.acesstoken;
  console.log("HI");
  console.log(token);
  if(!token)
  {
   return res.json({condition:false});
  }
  const userid=jwt.verify(token,"secret-password");
  const person = await User.findById(userid.id);
  res.json({condition:true,name:person.username});
 }
 catch(err)
 {
  res.json({condition:"false"});
 }
})

module.exports = router;