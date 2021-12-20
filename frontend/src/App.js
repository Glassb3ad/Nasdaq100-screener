import React, {useEffect} from 'react'
import { initStocks } from './reducers/stockReducer'
import { useDispatch, useSelector } from 'react-redux'
import Screener from './components/Screener'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Stock from './components/Stock'
import Login from './components/Login'
import UserPage from './components/UserPage'
import RegisterPage from './components/RegisterPage'
import Notification from './components/Notification'
import DirectSearch from './components/directSearch'
import { Navbar, Nav } from 'react-bootstrap'

const App = () => {
  const dispatch = useDispatch()
  //At start we fetch relevant stock data from server and put them into reudx storage
  useEffect(() => {
    dispatch(initStocks())
  }, [dispatch], 0)
  let user = useSelector(state => state.user)
  if(!user) user = null
  if(useSelector(state => state.stocks) == null) return (<></>)
  return(
      <Router>
      <Navbar class="navbar sticky-top navbar-dark" style ={{backgroundColor :'#2a282b'}} >
          <div class="d-flex flex-row bd-highlight mb-3">    
              <Nav.Link href="#" as="span">
              <Link class="navbar-brand" to='/'>Stocks  </Link>    
              </Nav.Link>
              <Nav.Link href="#" as="span">
              {user 
                ? <Link class="navbar-brand" to='/user'>{user.username} </Link>
                : <Link class="navbar-brand" to="/register">sign up</Link>
              }
              </Nav.Link>
              <Nav.Link href="#" as="span">
              <Login class="navbar-brand"/>
              </Nav.Link>
          </div>
              <DirectSearch class="navbar-brand"/>
      </Navbar>
      <Notification/> 
      <Switch>
          <Route path="/stocks/:id">
            <Stock/>
          </Route>
          <Route path='/user'>
            <UserPage acco = {user}/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path='/'>
            <div style = {{paddingTop: '30px', paddingLeft: '80px', paddingRight : '50px', backgroundColor: '#fafeff'}}><Screener /></div>
          </Route>
      </Switch>
    </Router>
  )
}

export default App