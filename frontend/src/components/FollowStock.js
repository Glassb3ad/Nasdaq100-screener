import { useSelector, useDispatch } from "react-redux"
import { followStock, unfollowStock } from "../reducers/userReducer"
import { addNotification } from "../reducers/notificationReducer"
import { Button } from "react-bootstrap"
const FollowStock = (props) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const stock = props.stock
    const follow = () => {
        dispatch(followStock(stock))
        dispatch(addNotification(`${user.username} follows ${stock.Name}`))
    }
    const unfollow = () => {
        dispatch(unfollowStock(stock._id))
        dispatch(addNotification(`${user.username} unfollows ${stock.Name}`))
    }
    if(!user) return (<></>)
    if(!user.followedStocks) return(<button onClick = {follow}>Follow</button>)
    if(user.followedStocks.find(a => a._id === stock._id)){
        return(<Button variant='primary' size='lg' onClick = {unfollow}>Unfollow</Button>)
    }
    else return (<Button variant='primary' size='lg' onClick = {follow}>Follow</Button>)
}

export default FollowStock