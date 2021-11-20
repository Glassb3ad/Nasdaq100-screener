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
                <input type="radio" name="parameter" value="MarketCapitalization"/>MarketCapitalization
                <input type="radio" name="parameter" value="PERatio"/>PERatio
                <input type="radio" name="parameter" value="PEGRatio"/>PEGRatio
                <input type="radio" name="parameter" value="DividendPerShare"/>DividendPerShare
                <input type="radio" name="parameter" value="EPS"/>EPS
                <input type="radio" name="parameter" value="ProfitMargin"/>ProfitMargin
                <input type="radio" name="parameter" value="ReturnOnAssetsTTM"/>ReturnOnAssetsTTM
                <input type="radio" name="parameter" value="ReturnOnEquityTTM"/>ReturnOnEquityTTM
                <input type="radio" name="parameter" value="RevenueTTM"/>RevenueTTM
                <input type="radio" name="parameter" value="TrailingPE"/>TrailingPE
                <input type="radio" name="parameter" value="ForwardPE"/>ForwardPE
                <input type="radio" name="parameter" value="PriceToSalesRatioTTM"/>PriceToSalesRatioTTM
                <input type="radio" name="parameter" value="PriceToBookRatio"/>PriceToBookRatio
                <input type="radio" name="parameter" value="Beta"/>Beta
                <input type="radio" name="parameter" value="SharesOutstanding"/>SharesOutstanding
                <input type="radio" name="parameter" value="DividendYield"/>DividendYield
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