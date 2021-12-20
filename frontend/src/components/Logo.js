import { useDispatch } from "react-redux"
import logoService from "../services/logoService"
import { addLogo } from "../reducers/stockReducer"
const Logo = (props) => {
    const dispatch = useDispatch()
    const stock = props.stock
    if(!stock || stock.logo === 'noLogoAvailable') return (<></>)
    if(stock.logo){
        return (<div style = {{paddingBottom : "30px"}}><img alt="logo" src={stock.logo}/></div>) 
    }
    logoService.getLogo(stock.Name)
        .then(ret => {
            if(ret.data.logo) dispatch(addLogo(stock._id, ret.data.logo))
            else {dispatch(addLogo(stock._id, "noLogoAvailable"))}
        })
        .catch(error => {console.log(error)})
    return <></>
}

export default Logo