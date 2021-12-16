import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/stocks'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getById = (id) => {
    return axios.get(baseUrl+id)
}
const getPrice = async (symbol) => {
    try{
        const response = await axios.get(`http://localhost:3001/api/prices/${symbol}`)
        return response.data
    }
    catch(error){return error}
}
const stockService = {
    getAll,
    getById,
    getPrice
}

export default stockService