import { useState } from "react"
import userService from "../services/userService"
import { addUser, removeUser } from "../reducers/userReducer"
import { useSelector, useDispatch } from 'react-redux'
import { addNotification, addError } from "../reducers/notificationReducer"
import { Button, Form } from "react-bootstrap"
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
        catch(error){dispatch(addError("Username or password is invalid"))}
        setPassword('')
        setUsername('')
    }
    
    //if user is logged in, show logOut -button
    if(user){
        return(
            <Button variant='primary' onClick = {() => {dispatch(removeUser()); dispatch(addNotification(`${user.username} has logged out`))}}>logOut</Button>
        )
    }
    //Shows login -button if no user is logged in and login -button is not pressed yet
    if(!visible){
        return (
            <div>
                <Button variant='primary'  onClick={() =>{setVisible(true)}}>Login</Button>
            </div>
        )
    }
    //After login -button is pressed, show login form
    return (
        <div>
            <Form onSubmit={handleLogin} class="form-inline">
            <div class="d-flex flex-row bd-highlight mb-3">
                <Button type="submit" variant='primary'>login</Button>
                <Button variant='secondary' onClick={() =>{setVisible(false)}}>cancel</Button>
                    <div class="p-2 bd-highlight">
                        <input type='text' value = {username} placeholder="username" onChange ={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div class="p-2 bd-highlight">
                        <input type='password' value = {password} placeholder="password" onChange ={(event) => setPassword(event.target.value)}/>
                    </div>
            </div>    
            </Form>
        </div>
    )
}

export default Login