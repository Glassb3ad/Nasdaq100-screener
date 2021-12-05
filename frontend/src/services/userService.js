import axios from 'axios'
const loginUrl = 'http://localhost:3001/api/login'
const userUrl = 'http://localhost:3001/api/users'

const login = async credentials => {
  const response = await axios.post(loginUrl, credentials)
  return response.data
}
const findById = async id => {
  try{ 
    const response = await axios.get(userUrl+'/'+id)
    return response.data
  }
  catch(error){return error.error}
}
const newAccount = async (user) => {
  console.log(user)
  const response = await axios.post(userUrl, user)
  console.log(response)
  return response.data
}

const userService = {login, findById, newAccount}
export default userService;