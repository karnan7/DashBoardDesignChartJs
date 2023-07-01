import React from 'react'

const Rain = () => {
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

export default Rain