import React from 'react'
import Axis from './Axis'


export default ({ scales, margins, svgDimensions, ticks}) => {
    const { height, width } = svgDimensions
    // const xProps = {
    //   orient: 'Bottom',
    //   scale: scales.xScale,
    //   translate: `translate(0, ${height - margins.bottom})`,
    //   tickSize: height - margins.top - margins.bottom,
    // }

    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${margins.left}, 0)`,
      tickSize: width - margins.left - margins.right,
      
    }
    
    return (
      
      <g>
        {/* <Axis {...xProps} /> */}
        <Axis {...yProps} />
        <text
          y='4'
          dy='8em'
          transform ="rotate(-90)"
          fill="black"
          textAnchor="end"
          fontSize="10px">
          {'price'}
        </text>
        <text
          y='4'
          dy="35em"
          dx='78em'
          transform ="rotate(0)"
          fill="black"
          textAnchor="start"
          fontSize="10px"
        >
         {'Time'}
        </text>
      </g>
  )
}