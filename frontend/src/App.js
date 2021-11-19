import React, {useEffect} from 'react'
import { initStocks } from './reducers/stockReducer'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initStocks())
  }, [dispatch])
  console.log(useSelector(state => state))
  return( 
    <div>
      <p>Hello world</p>
    </div>
  )
}

export default App