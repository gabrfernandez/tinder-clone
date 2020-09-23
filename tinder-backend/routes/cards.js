const router=require('express').Router();
let Card=require('../models/dbCards');

router.route('/').get((req,res)=>res.status(200).send("Hello World!"));

router.route('/tinder/cards').post((req,res)=>{
    const dbCard=req.body;

    Card.create(dbCard,(err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

router.route('/tinder/cards').get((req,res)=>{
    Card.find((err,data)=>{
        if(err){
            res.status(500).send(400)
        }else{
            res.status(200).send(data)
        }
    })
})


//exporting router
module.exports=router;