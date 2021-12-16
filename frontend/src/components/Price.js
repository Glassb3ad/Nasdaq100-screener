import { useDispatch } from "react-redux"
import stockService from "../services/stockService"
import { addPrice } from "../reducers/stockReducer"
const Price = ({stock}) => {
    const dispatch = useDispatch()
    if(stock.price){
        console.log("Stock price: " + stock.price)
        if(stock.price === 'NoPrice'){return <></>}
        try{
            const prices =  Object.values(stock.price["Time Series (Daily)"])
            return (<div>{prices[0]["4. close"]}$</div>)
        }
        catch(error){
            return (<div>cannot fetch yet</div>)
        }
    }
    else{
        stockService.getPrice(stock.Symbol).then((result) => {
            console.log(result)
            dispatch(addPrice(stock._id, result))
        }).catch(error => {
            console.log("Limit reached")
            dispatch(addPrice(stock._id, "NoPrice"))
            console.log("Price Denied")
        })
    }
    return <></>
}
export default Price

