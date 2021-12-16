import messageService from '../services/messageService'
import stockService from '../services/stockService' 

const stockReducer = (state = null, action) => {
    switch(action.type){
        case 'ADD_STOCKS':
            return action.content
        case 'ADD_COMMENT':
            const stock = state.find(a => a._id === action.content.commentedStock)
            const messages = stock.Messages.concat(action.content)
            messageService.addNew(action.content, action.user).then((response) => {console.log(response)})
            const newStock = {...stock, Messages: messages}
            const newState = state.map(a => {
                if(a._id === action.content.commentedStock) return newStock
                return a
            }) 
            return newState     
        case 'ADD_LOGO':
            const stockb = state.find(a => a._id === action.stockId)
            const newStockb = {...stockb, logo: action.logo}
            const newStateb = state.map(a => {
                if(a._id === newStockb._id) return newStockb
                return a
            })
            return newStateb
        case 'ADD_PRICE':
            const stockc = state.find(a => a._id === action.stockId)
            const newStockc = {...stockc, price: action.price}
            const newStatec = state.map(a => {
                if(a._id === newStockc._id) return newStockc
                return a
            })        
            return newStatec
        default:
            return state
    }
}

export const initStocks = () => {
    return (async (dispatch) =>{
        const stocks = await stockService.getAll()
        dispatch({
            type: 'ADD_STOCKS',
            content: stocks
        })
    })
}
export const addMessage = (message, user) => {
    return({
        type: 'ADD_COMMENT',
        content: message,
        user: user
    })
}
export const addLogo = (stockId, logo) => {
    console.log(logo)
    return({
        type: 'ADD_LOGO',
        logo: logo,
        stockId: stockId
    })
}
export const addPrice = (stockId, price) => {
    console.log(price)
    return({
        type: 'ADD_PRICE',
        price: price,
        stockId: stockId
    })    
} 

export default stockReducer