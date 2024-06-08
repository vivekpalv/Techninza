const { request } = require('express');
const Laptop=require('../models/laptop');

//create
exports.createLaptop=async(req,res)=>{
    try {
        const { company, processor, ram, body, screensize, weight } = req.body;
        const a= req.body;
        console.log(a.bod);
        const newLap=new Laptop({company,processor,ram,body,screensize,weight});
        // await newLap.save();

        res.status(200).send(newLap);
    } catch (error) {
        res.status(500).send({message:"user is not created"});
        console.error("not created Laptop in db atlas", error);
    }
};

//readAll
exports.readAll=async(request,response)=>{
    try {
        const list=await Laptop.find({});
        response.status(200).send(list);
    } catch (error) {
        console.error("ERROR occured in readAll function",error);
    }
};