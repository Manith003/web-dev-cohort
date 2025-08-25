const express = require('express');
const connectToDb = require('./src/db/db');

connectToDb(); 
const app = express();
app.use(express.json()); // middleware

app.get('/',(req,res)=>{
    res.json('hello world');
})


app.post('/notes',(req,res)=>{
 const {title, content} = req.body;
 console.log(title,content);
 res.json({
    message : "notes added sucessfully",
    title : title,
    content : content
 })
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})