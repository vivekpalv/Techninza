const mongoose=require('mongoose');

const laptop=new mongoose.Schema({
    company:{type:String,required:true},
    processor:{type:String,required:true},
    ram:{type:Number,required:true},
    body:{type:String,required:true},
    screensize:{type:Number,required:true},
    weight:{type:Number,required:true}
});

const Laptop=mongoose.model('Laptop',laptop);
module.exports=Laptop;