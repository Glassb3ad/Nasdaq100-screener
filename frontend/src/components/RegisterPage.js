import { useState } from "react"
import { useDispatch } from "react-redux"
import userService from "../services/userService"
import { addNotification, addError } from "../reducers/notificationReducer"
const RegisterPage = (props) => {
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(username +" "+ password1 + " " + password2);
        if(password1 === password2){
            console.log('hello1')
            try{
                const response = await userService.newAccount({username: username, password: password1})
                console.log(response)
                dispatch(addNotification(`New account ${username} created. Use username and password to login`))
                setUsername("")
                setPassword1("")
                setPassword2("")
            }
            catch(error){
                console.log(error.data)
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
       <div> 
            <h1>Register a new account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Username: <input type='text' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
                </div>
                <div>
                    Password: <input type='password' value={password1} onChange={(event)=>{setPassword1(event.target.value)}}/>
                </div>
                <div>
                    Password: <input type='password' value={password2} onChange={(event)=>{setPassword2(event.target.value)}}/>
                </div>
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default RegisterPage