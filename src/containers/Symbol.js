import React from 'react'
import styled from 'styled-components';

const TextWrap = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: rgba(51,51,51,1);
    border-radius: 6px;
    width:80%;
    height: auto;
    padding: 30px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    box-shadow:
        -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
        -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
        -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
        -50px -50px 85px rgba(255,255,255, 0.07),
        2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
        6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
        15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
        50px 50px 85px rgba(0, 0, 0, 0.07);
`
const SumWrap = styled.div`
    float:right;
`
const Line=styled.div`
    margin-top: 10px;
    border-top: 2px solid #c8dbe3;
    border-radius: 50px;
`
const Bold = styled.div`
    font-weight: bold;
    float:left;
`

const Symbol = ({symbol}) =>{
    console.log(symbol.open)
    return (
        <TextWrap>
          (BUY) <Bold>{symbol.symbol}</Bold> · {symbol.quantity} Shares <SumWrap>@ {symbol.price}</SumWrap>
          {/* <Line></Line> */}
          
        </TextWrap>
    )
}
export default Symbol