const Model = require('../models/userModel');

const { Router } = require('express');
const router = Router();

// add user data 

router.post('/add', (req,res)=>{
    console.log(req.body);
    //res.send('Response from user router');
    
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
    
});

router.get('/getall',(req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.err(err);
        res.status(500).json(err);
    });
});
        
router.post('/authenticate',()=>{
    Model.findOne(req.find)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({messange: 'invalid credentials'});
        
    }).catch((err) => {
        console.errpr(err);
        res.status(500).json(err);
        
    });
})

module.exports = router;


