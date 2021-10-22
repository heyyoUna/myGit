const express = require('express');
const Reslist = require('./../models/Reslist');
const router = express.Router();



router.get('/reslist',async(req,res)=>{
    res.json(await Reslist.findAll()); //別代參數因為抓整筆
})

 module.exports = router; //改了router