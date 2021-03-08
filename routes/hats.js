
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Hat = require('../models/hat');


//eventlistener för GET requests
router.get('/', (req, res, next) => {
    Hat.find().exec()
        .then(documents => {
            res.status(200).json(documents);
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;
            
            next(err);
        });
});


//eventlistener för GET requests med id
router.get('/id/:id', (req, res, next) => {
    
    const id = req.params.id;
    
    Hat.findById(id).exec()
        .then(document => {
            res.status(200).json(document);
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;
            
            next(err);
        });
});

//eventlistener för GET requests med color
router.get('/color/:color', (req, res, next) => {
    
    const search_key = req.params.color
    
    Hat.find({color: search_key}).exec()
        .then(document => {
            res.status(200).json(document);
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;
            
            next(err);
        });
});



//eventlistener för POST requests
router.post('/', (req, res, next) => {
    const hat= new Hat({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        description: req.body.description,
        price: req.body.price,
        picture: req.body.picture,
        sku: req.body.name[0]+req.body.name[1]+ req.body.name[2]+"-"+req.body.size+"-"+req.body.color[0]+req.body.color[1]+req.body.color[2]
       
    });

    hat.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message : "hat successfully created!",
                hat: hat 
            });
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;
            
            next(err);
        });

});

//eventlistener för DELETE requests med id
router.delete('/:id', (req, res, next) => {
    Hat.remove({_id: req.params.id}).exec()
        .then(result => {
            res.status(200).json({
                message: "Hat deleted",
            })
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;
            
            next(err);
        });
});



//error handling
router.use((req, res, next) => {
    const error = new Error("Only GET, POST, PUT, DELETE commands supported");
    error.status = 500;
    next(error);
});

module.exports = router;

