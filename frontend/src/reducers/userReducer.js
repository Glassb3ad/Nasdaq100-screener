import userService from "../services/userService"

const userReducer = (state = null, action) => {
    switch(action.type){
        case 'ADD_USER':
            return action.parameter
        case 'REMOVE':
            return null
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
            parameter: user 
        })}
}
export const removeUser = () => {
    return{
        type: 'REMOVE'
    }
}

export default userReducer