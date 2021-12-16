import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import FollowStock from './FollowStock'
import MessageForm from './MessageForm'
import { formatValue, formatParameter, formatDate } from '../utilities/format'
import Info from './Info'
import Logo from './Logo'
import Price from './Price'
const Stock = () => {
    let parameterId = useParams().id
    const stocks = useSelector(state => state.stocks)
    if(!stocks) return (<></>)
    const stock = stocks.find(a => {
        return a._id === parameterId})
    
    // This object is used to reder all relevant financial data and ignore the rest. 
    const financialDataOfStock = {
        Sector: stock.Sector,
        Industry: stock.Industry,
        MarketCapitalization: stock.MarketCapitalization,
        RevenueTTM : stock.RevenueTTM,
        RevenuePerShareTTM: stock.RevenuePerShareTTM,
        QuarterlyRevenueGrowthYOY: stock.QuarterlyRevenueGrowthYOY,
        GrossProfitTTM: stock.GrossProfitTTM,
        ProfitMargin: stock.ProfitMargin,
        EBITDA: stock.EBITDA,
        EPS: stock.EPS,
        DilutedEPSTTM: stock.DilutedEPSTTM,
        QuarterlyEarningsGrowthYOY: stock.QuarterlyEarningsGrowthYOY,
        BookValue: stock.BookValue,
        PERatio: stock.PERatio,
        PEGRatio: stock.PEGRatio,
        ForwardPE: stock.ForwardPE,
        TrailingPE: stock.TrailingPE,
        PriceToBookRatio: stock.PriceToBookRatio,
        PriceToSalesRatioTTM: stock.PriceToSalesRatioTTM,
        ReturnOnAssetsTTM: stock.ReturnOnAssetsTTM,
        ReturnOnEquityTTM: stock.ReturnOnEquityTTM,
        EVToRevenue: stock.EVToRevenue,
        EVToEBITDA: stock.EVToEBITDA,
        Beta: stock.Beta,
        DividendPerShare: stock.DividendPerShare,
        DividendYield: stock.DividendYield
    }  
    
    return(
        <div>
            <h1>{stock.Name} <FollowStock stock={stock}/></h1>
            <Logo stock={stock}/>
            <div><b>Current price: </b><Price stock={stock}/></div>
            <p>{stock.Description}</p>
            <h2>Financial information</h2>
            <FinancialInformation data={financialDataOfStock}/>
            <h2>Discussion</h2>
            <Messages stock = {stock}/>
            <MessageForm stock = {stock}/>
            <footer>
                <Info/>
            </footer>
        </div>
    )
}

//This component renders all financial information in a table.
const FinancialInformation = ({data}) => {
    console.log("Data: ")
    console.log(data)
    console.log("Data as array: ");
    console.log(Object.entries(data))
    let key = 1;
    return (
        <table>
            {Object.entries(data).map(a =>{
                key++;
                return(
                    <tr key={key}>
                        <th>{formatParameter(a[0])}</th>
                        <td>{formatValue(data, a[0])}</td>
                    </tr>
                )
            })}
        </table>
    )
}

//This component helps Stock component to render messages
const Messages = ({stock}) => {
    if(!stock.Messages || stock.Messages.length === 0) {
        return (
            <div>
                No discussion yet. add a new message. 
            </div>
        )
    }
    return(
        <div>
        {stock.Messages.map((a) => {
            return(
                <div key={a.id}>
                    <p> user {a.senderName}. {formatDate(a.date)} </p>
                    <p>{a.content}</p>
                </div>
            )
        })}
        </div>
    )

}
export default Stock