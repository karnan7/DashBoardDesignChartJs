import React from 'react'
import { Bar } from 'react-chartjs-2'

const FeelsLike = () => {

    const data = {
        labels: [0],
        datasets:[{
            labels: [100],
            data: [50],
            borderRadius: 25,
            borderSkipped:"false",
            barPercentage: 0.05,
            backgroundColor: "#5C9CE5",
            high:50,
            mid: 25,
            low: 0,
            current: 30
        }]
    }
    const options ={
        aspectRatio: 1.5,
        plugins: {
            legend: {
                display: false,
            },
            tooltip:{
                enabled: false,
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border:{
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                border:{
                    display: false,
                },
            },
        }
    }
    const horizontalBackgroundPlugin = {
        id: 'horizontalBackgroundPlugin',
        beforeDatasetsDraw(chart, args, plugins) {
            const {ctx, chartArea:{top, bottom, left, right, width, height}, scales: {x, y}} = chart;

            const barPercentage = data.datasets[0].barPercentage || 0.9;
            const categoryPercentage = data.datasets[0].categoryPercentage || 0.8;
            const barThickness = height / data.labels.length * barPercentage * categoryPercentage;

            ctx.save();
            ctx.fillStyle = '#DCDCDC';
            ctx.fillRect(left, y.getPixelForValue(0) - barThickness / 2, width, barThickness)
        }
    }

    const lines = {
        id: "lines",
        afterDatasetsDraw(chart, args, plugins) {
            const {ctx, chartArea:{top, bottom, left, right, width, height} } = chart;

            ctx.save();
            const xPos = chart.getDatasetMeta(0).data[0].x;
            const yPos = chart.getDatasetMeta(0).data[0].y;

            const singleUnit = width / data.datasets[0].data[0];
            console.log(singleUnit);

            ctx.translate(xPos, yPos);

            ctx.beginPath();
            ctx.moveTo(xPos - singleUnit * data.datasets[0].mid, 0);

            ctx.restore();
            
            ctx.font = '500 20px sans-serif';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText('po', xPos -20, yPos);
        }
    }
  return (
    <div>
        <Bar
        data={data}
        options={options}
        plugins={[horizontalBackgroundPlugin, lines]}/>
    </div>
  )
}

export default FeelsLike;