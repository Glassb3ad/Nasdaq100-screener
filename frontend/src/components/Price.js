import { useDispatch } from "react-redux"
import stockService from "../services/stockService"
import { addPrice } from "../reducers/stockReducer"
import { useEffect } from "react"
const Price = ({stock}) => {
    const dispatch = useDispatch()
    //Searches for a stock price data if stock.price changes
    useEffect(() => {
        if(stock.price){
            try{
                 Object.values(stock.price["Time Series (Daily)"])
            }
            catch(error){
                setTimeout(() => {
                    stockService.getPrice(stock.Symbol).then((result) => {
                        dispatch(addPrice(stock._id, result))
                    }).catch(error => {
                        dispatch(addPrice(stock._id, "NoPrice"))
                    })
                }, 120000)
            }
        }
        else{
            stockService.getPrice(stock.Symbol).then((result) => {
                dispatch(addPrice(stock._id, result))
            }).catch(error => {
                dispatch(addPrice(stock._id, "NoPrice"))
            })
        }
    }, [stock.price, dispatch, stock.Symbol, stock._id])

    if(stock.price){
        try{
            const prices =  Object.values(stock.price["Time Series (Daily)"])
            return (<div style={{fontSize: '20'}}>{prices[0]["4. close"]}$</div>)
        }
        catch(error){
            return(<>Not available</>)
        }
    }
    return <></>
}
export default Price

