const express = require('express');
const authRouter = require('./routes/auth.routes')
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/auth', authRouter);


module.exports = app;