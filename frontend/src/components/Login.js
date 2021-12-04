import { useState } from "react"
import userService from "../services/userService"
import { addUser, removeUser } from "../reducers/userReducer"
import { useSelector, useDispatch } from 'react-redux'


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
        }
        catch(error){console.log(error)}
        setPassword('')
        setUsername('')
    }
    
    //if user is logged in, show logOut -button
    if(user){
        return(
            <button onClick = {() => {dispatch(removeUser())}}>logOut</button>
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