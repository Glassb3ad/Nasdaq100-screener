import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addMessage } from "../reducers/stockReducer"

const MessageForm = (props) => {
    const [visible, setVisible] = useState(false)
    const [comment, setComment] = useState("")
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleComment = (event) => {
        event.preventDefault()
        const Message = {
            commentedStock : props.stock._id,
            sender : user.id,
            senderName : user.username,
            content: comment,
            date: (new Date()).toISOString()
        }
        console.log(Message);
        dispatch(addMessage(Message, user));
        setComment("")
        setVisible(false);
    }
    //User must be logged in to send message
    if(!user) return (<></>)
    //Button that opens form
    if(!visible) return (
        <button onClick = {() => setVisible(true)}>comment</button>
    )
    //form that allows user to leave comments avout the stock at hand
    return(
        <form onSubmit={handleComment}>
            Message<div>
            <input type='text' value={comment} onChange={(event) =>{setComment(event.target.value)}}/>
            <button type="submit">send</button>
            <button onClick ={() => {setVisible(false); setComment("")}}>cancel</button>
            </div>
        </form>
    )
}

export default MessageForm