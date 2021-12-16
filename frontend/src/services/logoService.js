import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/logos'

const getLogo =  async (stockName) => {
    try{
        const response = await axios.get(`${baseUrl}/${stockName}`)
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        throw error
    }
}

const logoService = {getLogo}

export default logoService