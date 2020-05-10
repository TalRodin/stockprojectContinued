import React,{useState} from 'react'
import styled from 'styled-components';
import DeleteTrans from './DeleteTrans'
import UpdateTrans from './UpdateTrans'
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
const ButtonWrapper=styled.button`
    float:left;
    @import url('https://fonts.googleapis.com/css?family=Lato');
    color: rgba(51,51,51,1);
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 0;
    outline: 0;
    position:relative;
    border-radius: 3px;
    margin-left:12%;
    padding:16px;
    background-color:#f7f7f7;
    text-shadow: 1px 1px 0 #FFF;
    &:hover {
      box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
    }
    &:active {
      box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    }
`
const Symbol = ({symbol}) =>{
    const [isDeleting, setisDeleting] = useState(false);
    const [isUpdating, setisUpdating] = useState(false);
    console.log(symbol)
    return (
        <TextWrap>
          (BUY) <Bold>{symbol.symbol}</Bold> · {symbol.quantity} Shares <SumWrap>@ {symbol.price}</SumWrap>
          {/* <Line></Line> */}
          <ButtonWrapper onClick={() => setisDeleting(true)}>D</ButtonWrapper>
          <DeleteTrans symbol={symbol} show={isDeleting} close={() => setisDeleting(false)} />
          <ButtonWrapper onClick={() => setisUpdating(true)}>E</ButtonWrapper>
          <UpdateTrans symbol={symbol} show={isUpdating} close={() => setisUpdating(false)} />
        </TextWrap>
    )
}
export default Symbol