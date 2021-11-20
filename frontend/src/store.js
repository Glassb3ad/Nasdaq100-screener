import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import stockReducer from './reducers/stockReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import parameterReducer from './reducers/parameterReducer'
const reducer = combineReducers({
    stocks: stockReducer,
    parameters: parameterReducer
})
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store