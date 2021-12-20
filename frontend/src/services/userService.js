import axios from 'axios'
const loginUrl = 'http://localhost:3001/api/login'
const userUrl = 'http://localhost:3001/api/users'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}
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
  const response = await axios.post(userUrl, user)
  return response.data
}

const updateStocklist = async (Stocks, user) => {
  setToken(user.token)
  const stocksId = Stocks.map(a => a._id)
  const body = { 
    followedStocks: stocksId
  }
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(userUrl + "/"+user.id, body, config)
  return response.data
}

const userService = {login, findById, newAccount, updateStocklist}
export default userService;