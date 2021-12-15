import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { formatValue, formatParameter } from "../utilities/format"

const StockList = (props) => {  
    const stocks =  useSelector(state => state.stocks)
    const parameters = useSelector(state => state.parameters)
    const [lastStock, setlastStock] = useState(Number(parameters[2]))
    const [firstStock, setFirstStock] = useState(0)
    useEffect(() => {
        setFirstStock(0)
        setlastStock(Number(parameters[2]))
    },[parameters])
    if(!stocks || !parameters) return (<></>)
    const parameter = parameters[0]
    const orderedStocks = orderStocks(stocks, parameters)
    const nextPage = () => {
        if(lastStock >= 99){
            setFirstStock(0)
            setlastStock(Number(parameters[2]))
        }
        else{
            setFirstStock(lastStock)
            setlastStock(lastStock + Number(parameters[2]))
        }
    }
    return(
        <div>
            <table>
                <tr>
                    <th>Company</th>
                    <th>{formatParameter(parameter)}</th>
                    <th>Sector</th>
                </tr>
                {orderedStocks.slice(firstStock,lastStock).map(stock => <StockRow stock = {stock} parameter = {parameter}/>)}
            </table>
            <button onClick = {nextPage}>show stocks {lastStock !== 100 ? lastStock : 0} - { !(lastStock + Number(parameters[2]) > 100) ? lastStock + Number(parameters[2]) : Number(parameters[2])}</button>
        </div>
    )
}

const StockRow = props => {
    const stock = props.stock
    const value = formatValue(stock, props.parameter);
    return (
        <tr>
            <td><Link to = {`stocks/${stock._id}`} >{stock.Name}</Link></td>
            <td>{value}</td>
            <td>{stock.Sector}</td>
        </tr>
    )
}

const orderStocks = (stocks, parameters) => {
        const descending = stocks.sort((a,b) => {
            if(!isNaN(Number(b[parameters[0]])) && !isNaN(Number(a[parameters[0]]))){
                return Number(b[parameters[0]]) - Number(a[parameters[0]])  
            }
            if(isNaN(Number(b[parameters[0]]))) return -1
            if(isNaN(Number(a[parameters[0]]))) return 1
            return 0
        })
        if(parameters[1] === 'DOWN'){
            return descending.reverse()
        }
        else return descending
}

export default StockList