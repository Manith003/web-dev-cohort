const express = require("express");
const app = express();

app.get('/',(req,res)=>{
res.send('first page');
})

app.get('/home',(req,res)=>{
res.send('home page');
})

app.listen(9999, () => {
  console.log("server running on port 9999");
});
