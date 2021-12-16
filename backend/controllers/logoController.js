const axios = require('axios')
const logoRouter = require('express').Router()



logoRouter.get('/', async (request, response) =>{
})

logoRouter.get("/:name",  async (request, response) => {
    let name = request.params.name
    if(name.endsWith(" Inc") ||name.endsWith(" Corporation")){
        name = name.slice(0,name.lastIndexOf(" "))
        console.log(name)
    }
    if(name.endsWith(".com")){
        name = name.slice(0,name.lastIndexOf("."))
    }
    const newToken = "Bearer sk_0742118ba5bf54f15cd075b8c2bbb7c2"
    const config = {
        headers: { Authorization: newToken },
    }
    try{
        const logo = await axios.get(`https://company.clearbit.com/v1/domains/find?name=${name}`, config)
        return response.status(200).json(logo.data)
    }
    catch(error){
        console.log("nothing found")
        return response.status(404).json(error.message)
    }
})

module.exports = logoRouter