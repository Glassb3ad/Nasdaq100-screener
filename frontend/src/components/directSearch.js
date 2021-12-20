import { useSelector } from 'react-redux'
import { useState } from "react"
import { Link } from "react-router-dom"

const DirectSearch = (props) => {
    const stocks = useSelector(state => state.stocks)
    const [filteredStocks, setFilteredStocks] = useState([])
    const [filter, setFilter] = useState("")
    
    //This function handles search
    const Filt = (event) =>  {
        setFilter(event.target.value)
        if(event.target.value === "") setFilteredStocks([])
        else{
            const newFilteredStocks = stocks
                .filter(a => {
                if(a.Name === undefined) return false
                return (a.Name.toLowerCase().includes(event.target.value.toLowerCase())) 
                })
                .sort((a,b) => {
                    if(a.Name === undefined) return -1;
                    if( b.Name === undefined) return 1;
                    if(a.Name.toLowerCase() === b.Name.toLowerCase()) return 0;
                    if(a.Name.toLowerCase() > b.Name.toLowerCase()) return 1
                    else return -1
                })
            setFilteredStocks(newFilteredStocks)
        }
    }
    //This function is used to disable search effects when you click any search result 
    const emptyResults = () => {
        setFilter("")
        setFilteredStocks([])
    }

    return (
        <div class="dropdown" style={{float:'left', padding: '10px' }}>
            <div class="dropdown-content" >
                <input  class="dropdown-item" value={filter} onChange={Filt} type="search" placeholder="Search" aria-label="Search" style={{backgroundColor : 'white'}}></input>
                <div style={{ position: 'absolute', backgroundColor: '#f9f9f9', minWidth: '230px', zIndex: '1', border: '1px solid'}}>
                {filteredStocks.slice(0,5).map(a =>{
                    return(<Link class="dropdown-item" style={{backgroundColor : 'white'}} to = {`/stocks/${a._id}`} onClick = {emptyResults}>{a.Name}</Link>)
                })}
                </div>          
            </div>
        </div>
    )
}
export default DirectSearch