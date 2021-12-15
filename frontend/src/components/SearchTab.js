import { useState } from "react"
import { addParameters } from "../reducers/parameterReducer"
import { useSelector, useDispatch } from 'react-redux'
const SearchTab = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false) 
    const currentParameters = useSelector(state => state.parameters)
    console.log("current parameters: " + currentParameters)
    const handleSub = (event) => {
        event.preventDefault()
        setShow(false)
        const newParameters = [].concat(currentParameters)
        if(event.target.parameter.value) newParameters[0] = event.target.parameter.value
        if(event.target.Order.value) newParameters[1] = event.target.Order.value
        if(event.target.Show.value) newParameters[2] = event.target.Show.value
        console.log(newParameters)
        dispatch(addParameters(newParameters[0], newParameters[1], newParameters[2]))
    }

    if(show){
        return(
            <form onSubmit = {handleSub}>
                <div>
                <label for="parameter">Parameter</label>
                <input type="radio" name="parameter" value="MarketCapitalization"/>Market capitalization
                <input type="radio" name="parameter" value="PERatio"/>P/E
                <input type="radio" name="parameter" value="PEGRatio"/>PEG
                <input type="radio" name="parameter" value="DividendPerShare"/>Dividend per share
                <input type="radio" name="parameter" value="EPS"/>EPS
                <input type="radio" name="parameter" value="ProfitMargin"/>Profit margin
                <input type="radio" name="parameter" value="ReturnOnAssetsTTM"/>ROA
                <input type="radio" name="parameter" value="ReturnOnEquityTTM"/>ROE
                <input type="radio" name="parameter" value="RevenueTTM"/>Revenue
                <input type="radio" name="parameter" value="TrailingPE"/>Trailing P/E
                <input type="radio" name="parameter" value="ForwardPE"/>Forward P/E
                <input type="radio" name="parameter" value="PriceToSalesRatioTTM"/>P/S
                <input type="radio" name="parameter" value="PriceToBookRatio"/>P/B
                <input type="radio" name="parameter" value="Beta"/>Beta
                <input type="radio" name="parameter" value="DividendYield"/>Dividend yield
                </div>
                <div>
                <label for="Order">Order</label>
                <input type="radio" name="Order" value="UP"/>high first
                <input type="radio" name="Order" value="DOWN"/>low first
                </div>
                <div>
                <label for="Show">Show on a page</label>
                <input type="radio" name="Show" value="10"/>10
                <input type="radio" name="Show" value="20"/>20
                <input type="radio" name="Show" value="50"/>50
                <input type="radio" name="Show" value="100"/>100
                </div>
                <button type="submit">Search</button>
            </form>
        )
    }
    else return(<button onClick={() => {setShow(true)}}>Adjust screener</button>)
}

export default SearchTab