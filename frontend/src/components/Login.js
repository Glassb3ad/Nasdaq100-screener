import { useState } from "react"
import userService from "../services/userService"
import { addUser, removeUser } from "../reducers/userReducer"
import { useSelector, useDispatch } from 'react-redux'
import { addNotification, addError } from "../reducers/notificationReducer"

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleLogin = async (event) => {
        event.preventDefault()
        try{
            const user = await userService.login({username, password})
            dispatch(addUser(user))
            dispatch(addNotification(`Logged in as ${user.username} `))
            setVisible(false)
        }
        catch(error){console.log(error.data); dispatch(addError("Username or password is invalid"))}
        setPassword('')
        setUsername('')
    }
    
    //if user is logged in, show logOut -button
    if(user){
        return(
            <button onClick = {() => {dispatch(removeUser()); dispatch(addNotification(`${user.username} has logged out`))}}>logOut</button>
        )
    }
    //Shows login -button if no user is logged in and login -button is not pressed yet
    if(!visible){
        return (
            <div>
                <button onClick={() =>{setVisible(true)}}>Login</button>
            </div>
        )
    }
    //After login -button is pressed, show login form
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input type='text' value = {username} onChange ={(event) => setUsername(event.target.value)}/>
                </div>
                <div>
                    password
                    <input type='password' value = {password} onChange ={(event) => setPassword(event.target.value)}/>
                </div>
                <button type="submit">login</button>
            </form>
            <button onClick={() =>{setVisible(false)}}>cancel</button>
        </div>
    )
}

export default Login