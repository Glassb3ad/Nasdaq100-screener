import { Link } from "react-router-dom"
import {useDispatch } from "react-redux"
import { unfollowStock } from "../reducers/userReducer"
const FollowedStock = ({stock}) => {
    const dispatch = useDispatch()
    const unfollow = () => {
        dispatch(unfollowStock(stock._id))
    }
    return(
        <li>
            <Link to={`/stocks/${stock._id}`}>{stock.Name}</Link> <button onClick={unfollow}>unfollow</button>
        </li>
    )
} 

const UserPage = (props) => {
    const user = props.acco
    console.log(user)
    if(!user) return (<div></div>)
    return (
        <div>
            <h1>{user.username}</h1>
            <h2>Followed Stocks</h2>
            <ul>
                {user.followedStocks.map((a) => <FollowedStock stock ={a}/>)}
            </ul>
            <h2>Notebook</h2>
        </div>        
    )
}

export default UserPage