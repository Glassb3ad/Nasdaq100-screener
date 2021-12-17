import { useDispatch, useSelector } from "react-redux"
import { addIndexHistory } from "../reducers/indexReducer"
import indexService from "../services/indexService"
import Chart from "./Chart"

const Nasdaq100 = (props) => {
    const dispatch = useDispatch()
    const index = useSelector(state => state.index)
    if(index){
        return(
            <div>
                <h2>Nasdaq 100 Index</h2>
                <div>
                    <b>Basic info: </b> Nasdaq 100  is a stock market index that contains 100 largest non-financial (for example insurance companies are excluded) companies from Nasdaq stock. 
                    Many of the lagrest companies in the world, like Alphabet or Amazon.com, can be found from Nasdaq100. Index notoriously contains high amount of big tech companies and it's therefor also known as US-tech 100. 
                    This application offers you ability to screen all nasdaq 100 stocks with familair key figures like P/E or ROE. You can also register and discuss of a particular stock with other users.
                    Signing up also allows you to follow your favorite stocks so that you can retrieve up-to-date information quickly
                </div>
                {index ? <Chart history={index}/> : <></>}
            </div>
        )
    }
    else{
        indexService.getIndex().then((history) => {
            console.log(history)
            dispatch(addIndexHistory(history))    
        }).catch(error => {console.log(error)})
    }
    return(
        <div>
            <h2>Nasdaq 100 Index</h2>
            <div>
                <b>Basic info: </b> BlaaBlaaBlaaBlaa 
            </div>
        </div>
    )
}

export default Nasdaq100