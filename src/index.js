import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './store'
import GlobalStyles from './utils/global';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme'
import Loader from './components/UI/Loader'
import styled from 'styled-components'


const Wrapper =styled.div`
width:100%
height: 100vh;
display:flex;
align-items:center;
justify-content: center;
`
const Back_Color = styled.div`
background-color: #F0F0F3;
height: 700px;
`
const root = document.getElementById('root')


ReactDOM.render(
           <ThemeProvider theme={theme}>
                <>
                <Wrapper><Loader /></Wrapper>
                    <GlobalStyles/>
                </>
            </ThemeProvider>,root)


store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            
            <ThemeProvider theme={theme}>
                {console.log(theme)}
                <Back_Color>
                    <App />
                    <GlobalStyles/>
                </Back_Color>
            </ThemeProvider>
            
            </BrowserRouter>
        </Provider>, document.getElementById('root'))
})


