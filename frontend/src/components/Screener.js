import StockList from "./StockList"
import SearchTab from "./SearchTab"
import Info from "./Info"
const Screener = (props) => {
    return(
        <>
            <SearchTab/>
            <StockList/>
            <footer>
                <Info/>
            </footer>
        </>
    )    
}

export default Screener