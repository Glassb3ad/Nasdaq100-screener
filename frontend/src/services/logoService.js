import axios from 'axios'
const baseUrl = '/api/logos'

const getLogo =  async (stockName) => {
    try{
        const response = await axios.get(`${baseUrl}/${stockName}`)
        return response
    }
    catch(error){
        throw error
    }
}

const logoService = {getLogo}

export default logoService