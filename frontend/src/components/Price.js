import { useDispatch } from "react-redux"
import stockService from "../services/stockService"
import { addPrice } from "../reducers/stockReducer"
import { useEffect } from "react"
const Price = ({stock}) => {
    const dispatch = useDispatch()
    //Searches for stock price if stock.price changes
    useEffect(() => {
        if(stock.price){
            try{
                const prices =  Object.values(stock.price["Time Series (Daily)"])
                const price = prices[0]["4. close"]
                console.log(price)
            }
            catch(error){
                setTimeout(() => {
                    stockService.getPrice(stock.Symbol).then((result) => {
                        console.log("new test")
                        console.log(result)
                        dispatch(addPrice(stock._id, result))
                    }).catch(error => {
                        console.log("Limit reached")
                        dispatch(addPrice(stock._id, "NoPrice"))
                        console.log("Price Denied")
                    })
                }, 120000)
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
    }, [stock.price, dispatch, stock.Symbol, stock._id])

    if(stock.price){
        try{
            const prices =  Object.values(stock.price["Time Series (Daily)"])
            return (<div>{prices[0]["4. close"]}$</div>)
        }
        catch(error){
            return(<>Not available</>)
        }
    }
    return <></>
}
export default Price

