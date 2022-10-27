const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();
const path = require('path')
require("dotenv").config()


app.use(cors({
    origin : ["http://localhost:3000","https://blogapp304.herokuapp.com"],
    credentials : true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://jagadeesh:ld6uqRyvEdks2hQw@cluster0.kydit.mongodb.net/blogdatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: 
true});



app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.use('/auth',require('./routes/auth'));
app.use('/posts',require('./routes/posts'));
app.listen(process.env.PORT||5000 , ()=>{
    console.log("server is running");
})