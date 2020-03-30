import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props);
    // this.onMouseOver = this.onMouseOver.bind(this);
    // this.onMouseOut = this.onMouseOut.bind(this);
    // this.colorScale = scaleLinear()
    //   .domain([this.props.minValue, this.props.maxValue])
    //   .range(['#d971bb', '#5142f5'])
    //   .interpolate(interpolateLab)
  }
  // onMouseOver() {
  //   this.setState({ isHovered: true });
  // }
  // onMouseOut() {
  //   this.setState({ isHovered: false });
  // }
  render() {
    console.log(this)
    const { scales, margins, data, svgDimensions, props} = this.props;
    const { xScale, yScale } = scales;
    const { height, width } = svgDimensions;

    let line = d3.line()
      .x(d => xScale((d.date)))
      .y(d => yScale(d.y))
    // function mouseMove(data){
         
    //   }
    return (
      // onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} {...props}
      <g >
        <path
          d={line(data)}
          fill={'#e3f2fd'}
          stroke={'steelblue'}
          strokeWidth={'1.5'}
          strokeLinejoin={'round'}
          strokeLinecap={'round'}
          // onMouseOver={() => this.props.onMouseOverCallback(data)}
          // onMouseOut={() => this.props.onMouseOutCallback(null)}
          
          // onMouseMove={mouseMove(data)}
          // data-tip={getTooltipHtml(data)}
          // data-for='lineTooltiplineChart'
          // data-html={true}
        />
      </g>
    );
  }
}