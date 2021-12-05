const notificationReducer = (state = {content : null, type : null }, action) => {
    switch(action.type){
        case 'ADD_NOTIFICATION':
            return {content: action.content, type: 'NOTIFICATION'}
        case 'ADD_ERROR':
            return {content: action.content, type: 'ERROR'} 
        case 'RESET':
            return {content : null, type : null }    
        default:
            return state
    }   
}
export const addNotification = (notification) => {
    return {
        type: 'ADD_NOTIFICATION',
        content: notification 
    }
}
export const addError = (error) => {
    return {
        type: 'ADD_ERROR',
        content: error 
    }
}

export const resetNotification = () => {
    return {
        type: 'RESET'
    }
}


export default notificationReducer