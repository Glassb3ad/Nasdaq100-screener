import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import userService from '../services/userService'

const Stock = () => {
    let parameterId = useParams().id
    const stocks = useSelector(state => state.stocks)
    if(!stocks) return (<></>)
    const stock = stocks.find(a => {
        return a._id === parameterId})
    return(
        <div>
            <h1>{stock.Name}</h1>
            <p>{stock.Description}</p>
            <h2>Financial information</h2>
            <table>
                <tr>
                    <th>Sector</th>
                    <td>{stock.Sector}</td>
                </tr>
                <tr>
                    <th>Industry</th>
                    <td>{stock.Industry}</td>
                </tr>
                <tr>
                    <th>Market Capitalization</th>
                    <td>{ Math.round((Number(stock.MarketCapitalization) / 1000000000) * 100)/100} billion USD</td>
                </tr>
                <tr>
                    <th>PE Ratio</th>
                    <td>{stock.PERatio}</td>
                </tr>
                <tr>
                    <th>PEG Ratio</th>
                    <td>{stock.PEGRatio}</td>
                </tr>
                <tr>
                    <th>Book Value</th>
                    <td>{stock.BookValue}</td>
                </tr>
                <tr>
                    <th>Divident per share</th>
                    <td>{stock.DividendPerShare}</td>
                </tr>
                <tr>
                    <th>Dividend yield</th>
                    <td>{stock.DividendYield}</td>
                </tr>
                <tr>
                    <th>EPS</th>
                    <td>{stock.EPS}</td>
                </tr>
                <tr>
                    <th>Revenue per share</th>
                    <td>{stock.RevenuePerShareTTM}</td>
                </tr>
                <tr>
                    <th>Profit margin</th>
                    <td>{stock.ProfitMargin}</td>
                </tr>
                <tr>
                    <th>Operating margin</th>
                    <td>{stock.OperatingMarginTTM}</td>
                </tr>
                <tr>
                    <th>ReturnOnAssets</th>
                    <td>{stock.ReturnOnAssetsTTM}</td>
                </tr>
                <tr>
                    <th>Return on equity</th>
                    <td>{stock.ReturnOnEquityTTM}</td>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <td>{stock.RevenueTTM}</td>
                </tr>
                <tr>
                    <th>Quarterly earnings growth YOY</th>
                    <td>{stock.QuarterlyEarningsGrowthYOY}</td>
                </tr>
                <tr>
                    <th>Analyst target price</th>
                    <td>{stock.AnalystTargetPrice}</td>
                </tr>
                <tr>
                    <th>Quarterly revenue growth YOY</th>
                    <td>{stock.QuarterlyRevenueGrowthYOY}</td>
                </tr>
                <tr>
                    <th>Trailing PE</th>
                    <td>{stock.TrailingPE}</td>
                </tr>
                <tr>
                    <th>Forward PE</th>
                    <td>{stock.ForwardPE}</td>
                </tr>
                <tr>
                    <th>Price-to-sales ratio</th>
                    <td>{stock.PriceToSalesRatioTTM}</td>
                </tr>
                <tr>
                    <th>Price-to-book ratio</th>
                    <td>{stock.PriceToBookRatio}</td>
                </tr>
                <tr>
                    <th>EV to revenue</th>
                    <td>{stock.EVToRevenue}</td>
                </tr>
                <tr>
                    <th>EV to EBITDA</th>
                    <td>{stock.EVToEBITDA}</td>
                </tr>
                <tr>
                    <th>Beta</th>
                    <td>{stock.Beta}</td>
                </tr>
                <tr>
                    <th>52 week high</th>
                    <td>{stock["52WeekHigh"]}</td>
                </tr>
                <tr>
                    <th>52 Week Low</th>
                    <td>{stock["52WeekLow"]}</td>
                </tr>
                <tr>
                    <th>SharesOutstanding</th>
                    <td>{stock.SharesOutstanding}</td>
                </tr>
                <tr>
                    <th>Dividend date</th>
                    <td>{stock.DividendDate}</td>
                </tr>
            </table>
            <h2>Discussion</h2>
            <Messages stock = {stock}/>
        </div>
    )
}

//This component helps Stock module to render discussions about the stock
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
                <div>
                    <p> username: {a.sender}. Date: {a.date}</p>
                    <p>{a.content}</p>
                </div>
            )
        })}
        </div>
    )

}
export default Stock