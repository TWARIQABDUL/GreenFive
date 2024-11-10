import React from 'react'
import graph from '../assets/graph.png'
function Charts() {
  return (
    <div className="chart">
        <h1>Monthry Insight</h1>
        <div className="graph">
            <img src={graph} alt="" />
        </div>
    </div>
  )
}

export default Charts