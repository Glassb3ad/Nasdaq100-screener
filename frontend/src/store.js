import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import stockReducer from './reducers/stockReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import parameterReducer from './reducers/parameterReducer'
import userReducer from './reducers/userReducer'
const reducer = combineReducers({
    stocks: stockReducer,
    parameters: parameterReducer,
    user : userReducer
})
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store