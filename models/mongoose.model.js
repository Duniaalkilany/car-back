const mongoose=require('mongoose')
const Schema=mongoose.Schema
const CarSchema=new Schema({
id:{
 type:Number,
 unique:true,
 
},
year:{
type:Number
},
model:{
    type:String  
},
img_url:{
    type:String
},
price:{
    type:Number
}

})


const CarModel=mongoose.model('favcars',CarSchema)
module.exports=CarModel