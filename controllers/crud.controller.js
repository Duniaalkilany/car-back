const CarModel=require('../models/mongoose.model')

const createFav=(req,res)=>{
    const{id,model,price,year,img_url}=req.body
    CarModel.find({id:id},(error,data)=>{
        if(data.length>0){
           res.send('already exsist')
        }else{
            const newCarModel=new CarModel({
                id:id,
                model:model,
                year:year,
                price:price,
                img_url:img_url
            })
            newCarModel.save()
            res.send(newCarModel) 
        }
    })

}


//============================================================

const getFav=(req,res)=>{
    CarModel.find({},(error,data)=>{
        if (error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })
}


//=========================================================

const deleteFav=(req,res)=>{
    const id=req.params.id
    CarModel.deleteOne({id:id},(error,data)=>{
        if (error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })
}

const updateFav=(req,res)=>{
const choosenId=req.params.id
const {model,price,img_url}=req.body
CarModel.findOne({id:choosenId},(error,data)=>{
if (error){
    res.send(error.message)
}else{
    data.model=model
    data.price=price
    data.img_url=img_url

    data.save()
    res.send(data)
}
})
}







module.exports={
    createFav,getFav, deleteFav,updateFav
}