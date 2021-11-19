import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/stocks'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getById = (id) => {
    return axios.get(baseUrl+id)
}
const service = {
    getAll,
    getById
}

export default service