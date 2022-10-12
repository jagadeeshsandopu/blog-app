const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();


app.use(cors({
    origin : ["http://localhost:3000"],
    credentials : true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://jagadeesh:ld6uqRyvEdks2hQw@cluster0.kydit.mongodb.net/blogdatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: 
true});

app.use('/auth',require('./routes/auth'));
app.use('/posts',require('./routes/posts'));
app.listen(5000 , ()=>{
    console.log("server is running");
})