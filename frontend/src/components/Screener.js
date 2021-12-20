import StockList from "./StockList"
import SearchTab from "./SearchTab"
import Info from "./Info"
import Nasdaq100 from "./Nasdaq"
const Screener = (props) => {
    return(
        <div>
            <Nasdaq100/>
            <div    style = {{paddingTop: '40px', backgroundColor: '#fafeff'}}>
                <h1>Stock Screener</h1>
                <div style = {{paddingTop: '20px', paddingBottom: '20px'}}>
                    <SearchTab/>
                </div>
                <StockList/>
            </div>
            <footer style = {{paddingTop: '20px', paddingBottom: '20px'}}>
                <Info/>
            </footer>
        </div>
    )    
}

export default Screener