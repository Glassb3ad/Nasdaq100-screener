const indexReducer = (state = null, action) => {
    switch(action.type){
        case 'ADD_HISTORY':
            return action.history
        default:
            return state
    }
}
export const addIndexHistory = (history) => {
    console.log("history received")
    return {
        type: 'ADD_HISTORY',
        history: history 
    }
}

export default indexReducer