import { useSelector, useDispatch } from "react-redux"
import { resetNotification } from "../reducers/notificationReducer"
const Notification = (props) => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification)
    console.log(notification)
    if(notification.type === null) return (<></>)
    setTimeout(() => {
        dispatch(resetNotification())
    }, 5000)
    if(notification.type === 'NOTIFICATION'){
        return(
            <div style={{background: 'green'}}>
                {notification.content}
            </div>
        )
    }
    if(notification.type === 'ERROR'){
        return(
            <div style={{background: 'red'}}>
                Error: {notification.content}
            </div>
        )
    }
}
export default Notification