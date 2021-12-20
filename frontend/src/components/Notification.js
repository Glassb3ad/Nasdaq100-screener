import { useSelector, useDispatch } from "react-redux"
import { resetNotification } from "../reducers/notificationReducer"
import { Alert } from "react-bootstrap"
const Notification = (props) => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification)
    if(notification.type === null) return (<></>)
    setTimeout(() => {
        dispatch(resetNotification())
    }, 5000)
    if(notification.type === 'NOTIFICATION'){
        return(
            <Alert variant='success'>
                {notification.content}
            </Alert>
        )
    }
    if(notification.type === 'ERROR'){
        return(
            <Alert variant='danger'>
                Error: {notification.content}
            </Alert>
        )
    }
}
export default Notification