import { useState } from "react"
import { useDispatch } from "react-redux"
import userService from "../services/userService"
import { addNotification, addError } from "../reducers/notificationReducer"
import { Form, Button } from "react-bootstrap"
const RegisterPage = (props) => {
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password1 === password2){
            try{
                await userService.newAccount({username: username, password: password1})
                dispatch(addNotification(`New account ${username} created. Use username and password to login`))
                setUsername("")
                setPassword1("")
                setPassword2("")
            }
            catch(error){
                dispatch(addError("Username is already taken"))
            }
            setUsername("")
            setPassword1("")
            setPassword2("")          
        }
        else{
            dispatch(addError("Passwords do not match"))
            setPassword1("")
            setPassword2("")
        }
    }

    return(
       <div style={{paddingLeft:'80px'}}> 
            <h1>Register a new account</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Label><b>Username</b></Form.Label>
                <div> <input type='text' value={username} onChange={(event)=>{setUsername(event.target.value)}}/></div>
                <Form.Label><b>password</b></Form.Label>
                <div> <input type='password' value={password1} onChange={(event)=>{setPassword1(event.target.value)}}/></div>
                <Form.Label><b>Password</b></Form.Label>
                <div><input type='password' value={password2} onChange={(event)=>{setPassword2(event.target.value)}}/></div>
                <Button variant='primary' type="submit">register</Button>
            </Form>
        </div>
    )
}

export default RegisterPage