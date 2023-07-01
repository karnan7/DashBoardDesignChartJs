import React from 'react'
import { Bar } from 'react-chartjs-2'

const Precipitation = () => {

    const data = {
        labels: [],
        datasets:  {
            labels: [],
            data: [],
        }
    }

    const options = {

    }
  return (
    <div>
        <Bar
        data={data}
        options={options}
        />
    </div>
  )
}

export default Precipitation