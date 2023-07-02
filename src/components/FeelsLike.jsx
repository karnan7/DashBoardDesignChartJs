import React from 'react'
import { Bar } from 'react-chartjs-2'

const FeelsLike = () => {

    const data = {
        labels: [0],
        datasets:[{
            labels: [0, 25, 50],
            data: [30, 50],
            borderRadius: 25,
            borderSkipped:"false",
            barPercentage: 0.1,
            backgroundColor: "#5C9CE5",
        }],
    }
    const options ={
        aspectRatio: 3,
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
                ticks: {
                    callback: function(val, index) {
                        return index % 5 === 0 ? this.getLabelForValue(val) : '';
                    }
                },
                grid: {
                    display: false,
                },
                border:{
                    display: false,
                },
            },
            y: {
                ticks: {
                    display: false,
                },
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


    const progressBar = {
        id: "progressBar",
        beforeDatasetsDraw: ((chart, args, plugins) => {
            const { ctx, data, chartArea:{top, bottom, left, right, width, height }, scales:{ x, y } } = chart;

            ctx.save();

            const barThickness = height / data.labels.length;

            chart.getDatasetMeta(0).data.forEach((datapoint, index) => {
                
                console.log(datapoint)
                datapoint.y = top + (barThickness * (index + 0.95))

                // shape //
                ctx.beginPath();
                ctx.strokeStyle = '#DCDCDC';
                ctx.fillStyle = '#DCDCDC';
                ctx.lineWidth = datapoint.height * 0.8;
                ctx.lineJoin = 'round';
                ctx.strokeRect(left + 15, datapoint.y, width - 30, 1)
            })

        })
    }
  return (
    <div style={{width: "150px"}}>
        <Bar
        data={data}
        options={options}
        plugins={[progressBar]}/>
    </div>
  )
}

export default FeelsLike;