//require
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const hatRoutes = require('./routes/hats');



//db connection
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://hatboi:boxplot@Cluster0.xhhrn.mongodb.net/Cluster0?retryWrites=true&w=majority');


//Alla inkommande request loggas på konsolen))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false }));

//Parsar JSON
app.use(bodyParser.json());

//Om en request riktats till localhost:8080/hats styrs requesten till hats.js
app.use('/hats', hatRoutes);



//Om en inkommande request inte är riktad mot /hats
app.use((req, res, next) => {
    const error = new Error("Requested resource not found! Supported resources are /hats");
    error.status = 404;
    next(error);
});

//server error
app.use((error, req, res, next) => {
    //send error with json
    res.status(error.status || 500).json({
        status: error.status,
        error: error.message
    });
});

module.exports = app;