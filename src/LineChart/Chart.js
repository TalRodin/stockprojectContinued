import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import * as d3 from 'd3';
import Axes from './Axes'
import Line from './Line'
import data from './data'
// import ReactTooltip from 'react-tooltip'
// import Focus from './focus'
// import ToolTipLine from './ToolTipLine'
import {timeFormat, timeParse} from "d3-time-format"

class Chart extends Component {
  constructor(props) {
    super(props)
    this.xScale = scaleLinear()
    this.yScale = scaleLinear()
    this.xScale.type = "Linear"
    this.yScale.type = "Linear"
    // this.state = {
    //   hoveredLine: null,
    // };
}    
  render() {
    console.log('~~~~~~~~',this.props.data)
    let q=this.props.data
    let arr=[]
    if (this.props.data){
    Object.keys(this.props.data).forEach(function(k,i){
        
        arr.push({date:i, y: parseInt(q[k]['4. close']) })
  })
    }
    console.log(arr)
    
    
    
    const props = this.props
    const max = d3.max(arr, d => Math.abs(d.y))
    const min = d3.min(arr, d => Math.abs(d.y))
    const xScale = this.xScale
                 .domain(d3.extent(arr, d => d.date))
                 .range([props.margins.left, props.width - props.margins.right])
    
    const yScale = this.yScale
                 .domain([0, max]).nice()
                 .range([props.height - props.margins.bottom, props.margins.top])
    return (
      <div>
          <svg  width={props.width} height={props.height}>
            <Axes
              scales={{ xScale, yScale }}
              margins={props.margins}
              svgDimensions={{width: props.width, height: props.height}}
            />
            <Line scales = {{ xScale, yScale }}
              svgDimensions={{width: props.width, height: props.height}}
              margins={props.margins}
              maxvalue={max}
              minvalue={min}
              data={arr} 
              // onMouseOverCallback={data=>this.setState({ hoveredLine: data }) }
              // onMouseOutCallback={d=>this.setState({ hoveredLine: d })}
              // onMouseMoveCallback={data => this.setState({ hoveredLine: data })}
            />
          </svg> 
            {/* <ReactTooltip 
              id='lineTooltiplineChart'
              html={true} 
              border={true}/> */}
            {/* {this.state.hoveredLine ? (
          <ToolTipLine
            hoveredLine={this.state.hoveredLine}
            scales={{ xScale, yScale }}
            data={props.dataModel} 
          />
        ) : null} */}
          </div>
        );
      }
}
Chart.defaultProps = {
  margins: {top: 20, right: 60, bottom: 40, left: 70},
  width: 850,
  height: 400,
  dataModel: data,
  tooltip:{ width: 100, height: 100, x: 10, y: -30 }
}
Chart.propTypes = {
  // dataModel: PropTypes.object.isRequired,
  margins: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
}
export default Chart;
