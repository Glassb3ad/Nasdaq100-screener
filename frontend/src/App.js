import React, {useEffect} from 'react'
import { initStocks } from './reducers/stockReducer'
import { useDispatch, useSelector } from 'react-redux'
import Screener from './components/Screener'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Stock from './components/Stock'
import Login from './components/Login'
import UserPage from './components/UserPage'
const App = () => {
  const dispatch = useDispatch()
  //At start we fetch relevant stock data from server and put them into reudx storage
  useEffect(() => {
    dispatch(initStocks())
  }, [dispatch])
  let user = useSelector(state => state.user)
  console.log(user)
  if(!user) user = null

  console.log(useSelector(state => state.stocks))
  console.log(useSelector(state => state.parameters))


  return(
      <Router>
      <div>
        <Link to='/'>Stocks  </Link>    
        {user 
          ? <Link to='/user'>{user.username}</Link>
          : <Link to='/newUser'>sign up   </Link>
        }
      </div>
      <div>
        <Login/>  
      </div> 
      <Switch>
          <Route path="/stocks/:id">
            <Stock/>
          </Route>
          <Route path='/user'>
            <UserPage acco = {user}/>
          </Route>
          <Route path='/'>
            <Screener/>
          </Route>
      </Switch>
    </Router>
  )
}

export default App