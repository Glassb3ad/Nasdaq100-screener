import axios from 'axios'
const loginUrl = 'http://localhost:3001/api/login'
const userUrl = 'http://localhost:3001/api/users'

const login = async credentials => {
  const response = await axios.post(loginUrl, credentials)
  return response.data
}
const findById = async id => {
  const response = await axios.get(userUrl+'/'+id)
  return response.data
}

const userService = {login, findById}
export default userService;