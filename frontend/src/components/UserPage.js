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
    if(!user) return (<div></div>)
    return (
        <div style = {{paddingTop: '30px', paddingLeft: '80px', paddingRight : '50px', backgroundColor: '#fafeff'}}>
            <h1>{user.username}</h1>
            <h2>Followed Stocks</h2>
            <ul>
                {user.followedStocks.map((a) => <FollowedStock key={a._id} stock ={a}/>)}
            </ul>
        </div>        
    )
}

export default UserPage