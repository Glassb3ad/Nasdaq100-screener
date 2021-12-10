import { useSelector, useDispatch } from "react-redux"
import { followStock, unfollowStock } from "../reducers/userReducer"
import { addNotification } from "../reducers/notificationReducer"
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
        return(<button onClick = {unfollow}>Unfollow</button>)
    }
    else return (<button onClick = {follow}>Follow</button>)
}

export default FollowStock