const router = require('express').Router();
const Post = require('../models/post');
const User= require('../models/user')
const authorization = require('../middleware/authorization')
const mongoose = require('mongoose')

// Create Post

router.post('/' , async (req,res) =>{
    try{
      const newpost = new Post(req.body);
      const savedpost = await newpost.save();
      res.status(200).json(savedpost);
    }
    catch(err){
     res.status(500).json(err);
    }
  })
    
//Get all Posts

router.get('/allposts' , async (req,res) =>{

  try{
   allposts = await Post.find();
   res.status(200).json(allposts);
  }
  catch(err){
    res.status(500).json(err);
  }
})

//Get single Post

router.get('/:id',authorization,async (req,res) =>{
 try{
  var _id = req.params.id;
  var permission =false;

  const post = await Post.findById({_id})
  var _id = req.user_id
  const user = await User.findById({_id});

  if(user.username == post.username)
  {permission = true;}
  
  res.status(200).json({permission,post});
 }catch(err){
  console.log(err);
  res.status(500).json(err);
 }
})

//Delete Post

router.delete('/:id', async (req,res)=>{
  
  try{

   const post = await Post.findById(req.params.id)
   
   if(post.username == req.body.username)
   {
    try
    {
     await post.delete();
     res.status(200).json("Post is deleted");
    }
    catch(err)
    {
     res.status(500).json(err);
    }
   }
   else
   {res.status(401).json("Not permitted to delete");}
  }
  catch(err)
  {res.status(500).json(err);}
})

router.put('/:id',async (req,res) =>{
  try{ 
   
   const post = await Post.findById(req.params.id);

   const updatedPost = await Post.findByIdAndUpdate(req.params.id,{$push: {comments: req.body }},{new:true});

   res.status(200).json(updatedPost);
  }
  catch(err)
  {
   res.status(500).json(err);
  }
})

module.exports = router ;