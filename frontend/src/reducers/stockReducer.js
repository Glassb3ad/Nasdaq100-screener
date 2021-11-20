import stockService from '../services/stockService' 

const stockReducer = (state = null, action) => {
    switch(action.type){
        case 'ADD_STOCKS':
            return action.content
        default:
            return state
    }
}

export const initStocks = () => {
    return async (dispatch) =>{
        const stocks = await stockService.getAll()
        dispatch({
            type: 'ADD_STOCKS',
            content: stocks
        })
    }
} 

export default stockReducer