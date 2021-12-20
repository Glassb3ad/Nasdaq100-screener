import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import FollowStock from './FollowStock'
import MessageForm from './MessageForm'
import { formatValue, formatParameter, formatDate } from '../utilities/format'
import Info from './Info'
import Logo from './Logo'
import Price from './Price'
import StockChart from './StockChart'
import { Table } from 'react-bootstrap'
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
        <div style = {{paddingTop: '30px', paddingLeft: '80px', paddingRight : '50px', backgroundColor: '#fafeff', boxShadow: "5px 10px #888888"}}>
            <Logo stock={stock}/>
            <h1 style={{border: '4px solid', paddingBottom : "10px"}}>{stock.Name} </h1>
            <div style={{ paddingTop: '5px'}}><FollowStock stock={stock}/></div>
            <StockChart stock = {stock}/>
            <div style={{ paddingTop: '20px', paddingBottom:"20px"}}>
                <h4>Last price:</h4>
                <Price stock={stock}/>
            </div>            
            <h2>Description</h2>
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
    let key = 1;
    return (
        <Table striped size='sm'>
            <tbody>
            {Object.entries(data).map(a =>{
                key++;
                return(
                    <tr key={key}>
                        <th>{formatParameter(a[0])}</th>
                        <td>{formatValue(data, a[0])}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
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
                <div key={a.id} style={{ backgroundColor:'#f0e5dd' }}>
                    <p style={{ backgroundColor:'#dbcabd' }}> user <b>{a.senderName}</b> {formatDate(a.date)} </p>
                    <p>{a.content}</p>
                </div>
            )
        })}
        </div>
    )

}
export default Stock