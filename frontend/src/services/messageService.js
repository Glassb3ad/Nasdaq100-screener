import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/messages'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const addNew = async (message, user) => {
    setToken(user.token)
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, message, config)
    return response 
}
const messageService = {addNew}

export default messageService
