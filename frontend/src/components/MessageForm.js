import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addMessage } from "../reducers/stockReducer"
import { Button, Form } from "react-bootstrap"

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
        dispatch(addMessage(Message, user));
        setComment("")
        setVisible(false);
    }
    //User must be logged in to send message
    if(!user) return (<></>)
    //Button that opens form
    if(!visible) return (
        <div style={{paddingBottom:'20px'}}>
        <Button variation='primary' size="lg" onClick = {() => setVisible(true)}>comment</Button>
        </div>
    )
    //form that allows user to leave comments avout the stock at hand
    return(
        <div style={{paddingBottom:'20px'}}>
        <Form onSubmit={handleComment}>
            <Form.Label><b>Message</b></Form.Label> <Form.Group className="mb-3"> 
            <textarea type='text'  rows="4" cols="50" value={comment} onChange={(event) =>{setComment(event.target.value)}}/>
            </Form.Group>
            <Button variant='primary' type="submit">send</Button>
            <Button variant='secondary' onClick ={() => {setVisible(false); setComment("")}}>cancel</Button>
        </Form>
        </div>
    )
}

export default MessageForm