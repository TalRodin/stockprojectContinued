import React from 'react'
import Form from '../components/getStock/Form'
import Prices from '../components/getStock/Prices'
import {firestoreConnect} from 'react-redux-firebase'
import AddSymbol from './AddSymbol'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Symbol from './Symbol'
import styled from 'styled-components';


const Title=styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    text-align: center;
    padding-bottom: 10%;
    color: rgba(51,51,51,1)
`
const WrapperOne=styled.div`
    float:left;
    width: 40%;
    height: 500px;
    border-radius: 4px;
    margin-right: 2%;
    background-color: #f7f7f7;
    padding: 30px;
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
const WrapperTwo=styled.div`
    float:left;
    margin-left: 8%;
    padding: 1.2rem 2rem;
    box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #fff;
    width: 40%;
    color: rgba(51,51,51,1) ;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    height: 500px;
    padding: 30px;
    background-color:#f7f7f7;
    border-radius: 4px;
    -webkit-appearance: none;
    border: 0;
      outline: 0;
      text-shadow: 1px 1px 0 #fff;
    &:focus {
      box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff;
    }
`
const Wrap=styled.div`
    width: 90%;
    position:center;
    top:20%;
    left:6%;
    position:absolute;
`
const InlineBlock=styled.div`
    display:inline-block;
`
//Displays Transactions, and gets api data from another website

const API_KEY='FBEEVNPWBGZJJW72'

class Transactions extends React.Component{
    state={
        symbol: undefined,
        open: undefined,
        high: undefined,
        low: undefined,
        price: undefined,
        volume: undefined,
        error: undefined,
        count: 5000
    }
    getPrice = async (e) => {
        e.preventDefault()
        const symbol = e.target.elements.symbol.value
        const api_call = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
        const data = await api_call.json()
        console.log(data)
        if (symbol && !data["Error Message"]){
            this.setState({
                symbol: data['Meta Data']['2. Symbol'],
                open: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['1. open'],
                high: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['2. high'],
                low: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['3. low'],
                price: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['4. close'],
                volume: data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[0]]['5. volume'],
                error: ""
            })
        }else{
            this.setState({
                symbol: undefined,
                open: undefined,
                high: undefined,
                low: undefined,
                price: undefined,
                volume: undefined,
                error: "The ticker symbol is NOT valid. Please enter the valid symbol"
            })
        }  
    }
    render(){
        console.log(this.props)
        let content;
        let total=0;
        if(!this.props.symbols){
            content = <p>Loading...</p>
        }
        else if (!this.props.symbols[this.props.userId] && this.props.requested[`todos/${this.props.userId}`]){
            content = <p>No bought stocks yet</p>
        }
        else{
            this.props.symbols[this.props.userId].todos.forEach(function(v){
                let t=v.price*v.quantity
                total+=t
            })
            content = this.props.symbols[this.props.userId].todos.map(symbol=><Symbol key={symbol.id} symbol={symbol}></Symbol>)
        }
        return(
            <Wrap>
                < WrapperOne>
                    <Title>Stock Information</Title>
                    <InlineBlock>
                        <Form getPrice={this.getPrice}/>
                        <Prices 
                            symbol={this.state.symbol}
                            open={this.state.open}
                            high={this.state.high}
                            low={this.state.low}
                            price={this.state.price}
                            volume={this.state.volume}
                            cash={this.state.count-total}
                            error={this.state.error}
                        />
                    </InlineBlock>
                    <AddSymbol  total={this.state.count-total}/>
                </WrapperOne>
                < WrapperTwo>
                    <Title>Transactions</Title>
                    {content}
                </ WrapperTwo>
           </Wrap>
        )
    }
}
const mapStateToProps = ({firebase,firestore}) =>({
    userId: firebase.auth.uid,
    symbols: firestore.data.todos,
    requesting:  firestore.status.requesting,
    requested: firestore.status.requested
})
const mapDispatchToProps = {}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props=>[`todos/${props.userId}`]),
    )(Transactions)
