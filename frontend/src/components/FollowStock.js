import { useSelector, useDispatch } from "react-redux"
import { followStock, unfollowStock } from "../reducers/userReducer"
const FollowStock = (props) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const stock = props.stock
    const follow = () => {
        dispatch(followStock(stock))
    }
    const unfollow = () => {
        dispatch(unfollowStock(stock._id))
    }
    if(!user) return (<></>)
    if(!user.followedStocks) return(<button onClick = {follow}>Follow</button>)
    if(user.followedStocks.find(a => a._id === stock._id)){
        return(<button onClick = {unfollow}>Unfollow</button>)
    }
    else return (<button onClick = {follow}>Follow</button>)
}

export default FollowStock