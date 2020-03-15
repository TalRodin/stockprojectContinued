import React from 'react'
import styled from 'styled-components';

// const WrapperTwo=styled.div`
//     // float:right;
//     // margin-left: 5px;
//     padding: 1.2rem 2rem;
//     box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #fff;
//     width: 60%;
//     color: rgba(51,51,51,1) ;
//     box-sizing: border-box;
//     transition: all 0.2s ease-in-out;
//     appearance: none;
//     // position:relative;
//     height:auto;
//     padding: 30px;
//     background-color:#f7f7f7;
//     border-radius: 4px;
//     -webkit-appearance: none;
//     border: 0;
//       outline: 0;
//       text-shadow: 1px 1px 0 #fff;
//     &:focus {
//       box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff;
//     }
// `

const TextWrap = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-size: 16px;
    float:left;
    font-family: 'Lato', sans-serif;
    color: rgba(51,51,51,1);
    position:absolute;
    margin-top:10%;
`
const Line = styled.p`
    font-weight:bold;
`
//Displays information about stock

class Prices extends React.Component{
      render(){
          let message=''
          if (this.props.cash && this.props.price){
            if (this.props.cash/this.props.price>=1){
              message=`You are able to buy ${Math.floor(this.props.cash/this.props.price)} stocks!`
            }else{
              message=`You have no enough cash!`
            }
          }
          console.log(this.props.cash/this.props.price )
          return(
            // <WrapperTwo>
            <TextWrap>
                {this.props.cash && <p>Cash available: ${this.props.cash.toFixed(2)}</p>}
                {this.props.symbol && <p>Symbol: {this.props.symbol}</p>}
                {this.props.price && <p>Price: {this.props.price}</p>}
                {this.props.volume && <p>Volume: {this.props.volume}</p>}
                {this.props.error && <p>{this.props.error}</p>}
                <Line>{message}</Line>
            </TextWrap>
            // </WrapperTwo>
            )
}}
export default Prices