import React from 'react'
import Prices from '../components/getStock/Prices'
import Form from '../components/getStock/Form'
import styled from 'styled-components';

const TextWrap = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: rgba(51,51,51,1)
`
const SumWrap = styled.div`
    float:right;
`
const ConditColor=styled.div`
    float:left;
    color: ${props => ((props.price>props.openPrice) ? "green" :(props.price<props.openPrice) ? "red": '#61677C')}
`
const Line=styled.div`
    padding-top: 5px;
    border-top: 1px solid #eee;
`

const API_KEY='FBEEVNPWBGZJJW72'

class Symbol extends React.Component{
    state={    
            price: 0,
            openPrice:0,
        }
    componentDidMount() {
        this.getPrice();
        this.interval = setInterval(() => {
          this.getPrice();
        }, 1000 * 60 * 60 * 24);
    }
    getPrice=async()=>{
        const symbol = this.props.symbol.symbol
        const api_call = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
        const data = await api_call.json()
        this.setState({
            price: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['4. close'],
            openPrice: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['1. open'],
        })
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
        <TextWrap>
           <ConditColor price={this.state.price} openPrice={this.state.openPrice} >{this.props.symbol.symbol}</ConditColor> · {this.props.symbol.quantity} Shares<SumWrap>${(this.state.price*this.props.symbol.quantity).toFixed(2)} USD -- ({(this.state.price*this.props.symbol.quantity-this.props.symbol.price).toFixed(2)})</SumWrap>
           <Line></Line>
        </TextWrap>
        )
    }
}
export default Symbol