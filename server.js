const express = require('express');

const connectDB = require('./config/db')

const app = express();

const path = require('path')

//connect DB
connectDB();

//Init middleware
app.use(express.json({extended: false}));

app.get('/', (req,res) => res.json({msg: 'Welcome to Book log'}))



//routes
app.use('/api/logs', require('./routes/logs'));
app.use('/api/loggers', require('./routes/loggers'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started'));