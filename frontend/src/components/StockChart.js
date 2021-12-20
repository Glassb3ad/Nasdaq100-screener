import {Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
const StockChart = ({stock}) => {
    if(!stock.price){
        return <></>
    }
    if(stock.price === "NoPrice"){
        return <></>
    }
    const dates = Object.getOwnPropertyNames(stock.price["Time Series (Daily)"]).reverse()
    const closeValues = dates.map(a => stock.price["Time Series (Daily)"][a]["4. close"])
    const state = {
        labels: dates,
        datasets: [
          {
            label: "price",
            fill: true,
            lineTension: 0.5,
            
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data: closeValues
          }
        ]
    }
    return (
        <div style={{paddingTop: "20px", width:"80%", height:"80%"}}>
        <h2>History</h2>
        <Line
        data={state}
        options={{
          title:{
            display:true,
            text:'Nasdaq 100',
            fontSize:20,
            position: 'top'
          },
          elements: {
              point:{
                  pointStyle : 'rect',
                  radius : 1
              }
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
      </div>
    )
}
 

export default StockChart