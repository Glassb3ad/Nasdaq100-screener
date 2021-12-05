import { Link } from "react-router-dom"

const FollowedStock = ({stock}) => {
    return(
        <li>
            <Link to={`/stocks/${stock._id}`}>{stock.Name}</Link>
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
        </div>        
    )
}

export default UserPage