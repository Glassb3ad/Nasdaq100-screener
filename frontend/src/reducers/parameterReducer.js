const parameterReducer = (state = ["MarketCapitalization", "UP", "50"], action) => {
    switch(action.type){
        case 'ADD_PARAMETER':
            return action.parameter
        default:
            return state
    }
}
export const addParameters = (parameter, direction, amount) => {
    return {
        type: 'ADD_PARAMETER',
        parameter: [parameter, direction, amount] 
    }
}

export default parameterReducer
