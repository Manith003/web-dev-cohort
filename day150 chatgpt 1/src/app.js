const express = require('express');
const cp = require('cookie-parser');

/* Routes */ 
const router = require('./routes/auth.routes');
const chatRouter = require('./routes/chat.routes');

/* using middlewares */
const app = express();
app.use(express.json());
app.use(cp());

/* using Routes */
app.use('/api/auth',router);
app.use('/api/chat',chatRouter); 


app.get('/',(req,res)=>{
    res.json({
        message: "hello from backend"
    })
})

module.exports = app;