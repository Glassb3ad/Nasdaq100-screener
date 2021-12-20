import { useState } from "react"
import { addParameters } from "../reducers/parameterReducer"
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Col } from "react-bootstrap"
const SearchTab = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false) 
    const currentParameters = useSelector(state => state.parameters)
    const handleSub = (event) => {
        event.preventDefault()
        setShow(false)
        const newParameters = [].concat(currentParameters)
        if(event.target.parameter.value) newParameters[0] = event.target.parameter.value
        if(event.target.Order.value) newParameters[1] = event.target.Order.value
        if(event.target.Show.value) newParameters[2] = event.target.Show.value
        dispatch(addParameters(newParameters[0], newParameters[1], newParameters[2]))
    }

    if(show){
        return(
            <div style = {{backgroundColor: '#d3dee0', maxWidth :'500px'}}>
            <Form onSubmit = {handleSub}>
                <div class="d-inline-flex p-2 bd-highlight">
                    <div class="p-2 bd-highlight">
                    <Form.Group className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                        <b> Parameter</b>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Market Capitalization"
                            name="parameter"
                            value="MarketCapitalization"
                            />
                            <Form.Check
                            type="radio"
                            label="P/E"
                            name="parameter"
                            value = "PERatio"
                            />
                            <Form.Check
                            type="radio"
                            label="PEG"
                            name="parameter"
                            value="PEGRatio"
                            />
                            <Form.Check
                            type="radio"
                            label="EPS"
                            name="parameter"
                            value="EPS"
                            />
                            <Form.Check
                            type="radio"
                            label="Profit margin"
                            name="parameter"
                            value = "ProfitMargin"
                            />
                            <Form.Check
                            type="radio"
                            label="ROA"
                            name="parameter"
                            value="ReturnOnAssetsTTM"
                            />
                            <Form.Check
                            type="radio"
                            label="Dividend per share"
                            name="parameter"
                            value="DividendPerShare"
                            />
                            <Form.Check
                            type="radio"
                            label="ROE"
                            name="parameter"
                            value = "ReturnOnEquityTTM"
                            />
                            <Form.Check
                            type="radio"
                            label="Revenue"
                            name="parameter"
                            value="RevenueTTM"
                            />
                            <Form.Check
                            type="radio"
                            label="Trailing P/E"
                            name="parameter"
                            value="TrailingPE"
                            />
                            <Form.Check
                            type="radio"
                            label="P/S"
                            name="parameter"
                            value = "PriceToSalesRatioTTM"
                            />
                            <Form.Check
                            type="radio"
                            label="P/B"
                            name="parameter"
                            value="PriceToBookRatio"
                            />
                            <Form.Check
                            type="radio"
                            label="Forward P/E"
                            name="parameter"
                            value="ForwardPE"
                            />
                            <Form.Check
                            type="radio"
                            label="Beta"
                            name="parameter"
                            value="Beta"
                            />
                            <Form.Check
                            type="radio"
                            label="Dividend Yield"
                            name="parameter"                        
                            value="DividendYield"
                            />                          
                        </Col>
                    </Form.Group>
                    </div>
                    <div class="p-2 bd-highlight">
                        <Form.Group className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                            <b> Order</b>
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="High first"
                                name="Order"
                                value="UP"
                                />
                                <Form.Check
                                type="radio"
                                label="Low first"
                                name="Order"
                                value="DOWN"
                                />
                            </Col>
                        </Form.Group>
                    </div>
                    <div class="p-2 bd-highlight">
                <Form.Group className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                    <div class="d-inline-flex p-2 bd-highlight"> <b> Show on page</b></div>
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="10"
                        name="Show"
                        value="10"
                        />
                        <Form.Check
                        type="radio"
                        label="20"
                        name="Show"
                        value="20"
                        />
                        <Form.Check
                        type="radio"
                        label="50"
                        name="Show"
                        value="50"
                        />
                        <Form.Check
                        type="radio"
                        label="100"
                        name="Show"
                        value="100"
                        />                        
                    </Col>
                </Form.Group>
                </div>
                </div>
                <div>
                <Button variant="primary" type="submit">Search</Button>
                <Button variant="secondary" onClick={() => {setShow(false)}}>Close</Button>
                </div>
            </Form>
            </div>
        )
    }
    else return(<Button size="lg" variant = 'primary' onClick={() => {setShow(true)}}>Adjust screener</Button>)
}

export default SearchTab