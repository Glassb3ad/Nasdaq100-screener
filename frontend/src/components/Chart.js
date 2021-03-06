import {Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart1 } from 'react-chartjs-2'


const Chart = ({history}) => {
    if(!history) return <></>
    const dates = (history.map(a => a.date)).reverse()
    const closeValues = (history.map(a => Math.round((a.close * 100))/100)).reverse()
    const state = {
        labels: dates,
        datasets: [
          {
            label: "points",
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
        <div style={{width:"80%", height:"80%"}}>
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

export default Chart