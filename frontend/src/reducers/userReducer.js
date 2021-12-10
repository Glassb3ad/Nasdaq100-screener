import userService from "../services/userService"

const userReducer = (state = null, action) => {
    switch(action.type){
        case 'ADD_USER':
            return action.parameter
        case 'REMOVE':
            return null
        case 'ADD_STOCK':
            const followedStocks = state.followedStocks.concat(action.stock)
            userService.updateStocklist(followedStocks, state)
            return {...state, followedStocks : followedStocks}
        case 'REMOVE_STOCK':
            const newFollowedStocks = state.followedStocks.filter(a => a._id !== action.stockId)
            userService.updateStocklist(newFollowedStocks, state)
            return {...state, followedStocks: newFollowedStocks}
        default:
            return state
    }
} 
export const addUser = (a) => {
    console.log(a)
    return async (dispatch) => { 
        const user = await userService.findById(a.id)
        dispatch(
        {
            type: 'ADD_USER',
            parameter: {...user, token : a.token} 
        })}
}
export const removeUser = () => {
    return{
        type: 'REMOVE'
    }
}

export const followStock = (stock) => {
    return{
        type: 'ADD_STOCK',
        stock: stock
    }
}
export const unfollowStock = (stockId) => {
    return{
        type: 'REMOVE_STOCK',
        stockId: stockId
    }
}

export default userReducer