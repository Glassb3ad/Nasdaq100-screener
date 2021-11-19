import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux' 
import thunk from 'redux-thunk'
import stockReducer from './reducers/stockReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'

const store = createStore(
  stockReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
ReactDOM.render(
  <div>
  <Provider store={store}>
    <App />
  </Provider>,
  </div>,
  document.getElementById('root')
)