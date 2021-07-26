const axios=require('axios')
const apiUrl=process.env.API_URL

const apiData=(req,res)=>{
    axios.get(`${apiUrl}`).then(response=>{
        res.send(response.data)
    }
    ).catch(error=>res.send(error.message))
};

module.exports=apiData




