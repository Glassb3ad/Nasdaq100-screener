import axios from 'axios'
const basicUrl = '/api/index'

const getIndex = async () => {
    try{
        const response = await axios.get(basicUrl)
        return response.data.historical
    }
    catch(error){return null}
}
const indexService = {getIndex}
export default indexService