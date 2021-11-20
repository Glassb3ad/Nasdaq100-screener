import React, {useEffect} from 'react'
import { initStocks } from './reducers/stockReducer'
import { useDispatch, useSelector } from 'react-redux'
import Screener from './components/Screener'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initStocks())
  }, [dispatch])

  console.log(useSelector(state => state.stocks))
  console.log(useSelector(state => state.parameters))
  return( 
    <div>
    <img src="https://tse3.explicit.bing.net/th?id=OIP.L1QYZq6hG0dU4fzth0ytBwHaE8&pid=Api&P=0&w=241&h=161" alt="Bad frog"/><br></br>
      <Screener/>
    </div>
  )
}

export default App