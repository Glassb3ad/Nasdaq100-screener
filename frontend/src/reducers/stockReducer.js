import stockService from '../services/stockService' 

const stockReducer = (state = null, action) => {
    switch(action.type){
        case 'ADD_STOCKS':
            return action.content
        case 'ADD_COMMENT':
            const stock = state.find(a => a._id === action.content.commentedStock)
            const messages = stock.Messages.concat(action.content)
            const newStock = {...stock, Messages: messages}
            const newState = state.map(a => {
                if(a._id === action.content.commentedStock) return newStock
                return a
            }) 
            return newState     
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
export const addMessage = (message) => {
    return({
        type: 'ADD_COMMENT',
        content: message
    })
} 

export default stockReducer