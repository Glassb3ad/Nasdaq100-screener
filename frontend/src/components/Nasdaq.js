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
                    <b>Basic info: </b> BlaaBlaaBlaaBlaa 
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