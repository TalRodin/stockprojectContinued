import React from 'react'
import '/Users/alyonarodin/Desktop/d3/d3/src/styles/App.css'


export default ({hoveredLine, scales}) => {
    const { xScale, yScale } = scales
 
    //   left: `${xScale(hoveredLine.date)}px`,
    //   top: `${yScale(hoveredLine.y)}px`
    
    console.log(hoveredLine)
    return (
      <div >
    
          {/* <rect width="130" height="15" style="fill: rgb(238, 238, 238); opacity: 0.8;"></rect>
          <tr ><b>{hoveredLine.date}</b></tr> */}
        <rect  className="Tooltip" width="130" height="15" x='10' y='-22' rx='4' ry='4'>
         
        </rect>
        <text x='18' y='-2' className='tooltip-date'></text>
        <text x='60' y='18' className='tooltip-y'></text>
        {/* <rect width="130" height="15" style="fill: rgb(238, 238, 238); opacity: 0.8;"></rect> */}
        {/* <text className="featText" dx="20" dy="30">408</text> */}
        {/* <circle y={yScale(hoveredLine.y)} r="6" style="fill: rgb(255, 255, 255); stroke: rgb(0, 177, 81);"></circle> */}
      </div>
    )
  }