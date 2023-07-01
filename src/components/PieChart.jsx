import React from 'react'
import {  Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto';


const PieChart = () => {

    const data = {
        labels: [0, 5, 10, 20, 30, 40],
        datasets: [{
            label: [0, 5, 10, 20, 30, 40],
            data: [10, 10, 10, 10, 10],
            circumference:180,
            rotation: 270,
            cutout: "85%",
            needleValue: 4,
            spacing: 10,
            borderRadius: 15,
            backgroundColor: "#5C9CE5"
        }]
    }

    const gaugeNeedle = {
        id: "gaugeNeedle",
        afterDatasetsDraw(chart, args, plugins) {
            const { ctx, data } = chart;
            ctx.save();
            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;
            const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
            const radius = 5;
            const angle = Math.PI / 180;
            
            const needleValue = data.datasets[0].needleValue;
            
            
            const dataTotal = data.datasets[0].data.reduce((a,b) => a + b, 0)
            const circumference = (((chart.getDatasetMeta(0).data[0].circumference/Math.PI)/data.datasets[0].data[0]) * needleValue);

            ctx.translate(xCenter , (yCenter - 17));
            ctx.rotate(Math.PI * (circumference + 1.5 ) )

            // arrow
            ctx.beginPath();

            ctx.moveTo(0 - radius, -10);
            ctx.lineTo(0, 10 - innerRadius);
            ctx.lineTo(0 + radius, -10);
            ctx.fillStyle = '#5C9CE5'
            ctx.fill();

            // dot
            ctx.beginPath();
            // ctx.arc(x, y, radius, angleStart, angleEnd, counterClockWise)
            ctx.arc(0, 0, radius, 0, angle * 360, false);
            ctx.fillStyle = '#5C9CE5'
            ctx.fill();

            ctx.restore();
        }
    }

    const gaugeFlowMeter = {
        id: "gaugeFlowMeter",
        afterDatasetsDraw(chart, args, plugins) {
            const { ctx, data } = chart;

            ctx.save();
            const needleValue = data.datasets[0].needleValue;
            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;
            const circumference = (((chart.getDatasetMeta(0).data[0].circumference/Math.PI)/data.datasets[0].data[0]) * needleValue);
            const percentageValue = circumference * 100;

            // flowMeter
            ctx.font = '500 15px sans-serif';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center'
            ctx.fillText(`${percentageValue.toFixed(0)} km/h`, xCenter, yCenter)
        }
    }

    const options = {
        aspectRatio: 1.5,
        plugins:{
            legend:{
                display: false,
            },
            tooltip:{
                enabled: false,
            },
        },
    }
  return (
    <div style={{width:"80%", height:"90%"}}>
        <Doughnut
        data={data}
        options={options}
        plugins={[gaugeNeedle, gaugeFlowMeter]}
        />
    </div>
  )
}

export default PieChart;