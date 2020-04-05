import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './store'
import GlobalStyles from './utils/global';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme'
const root = document.getElementById('root')


ReactDOM.render(<div>Loading...</div>,root)


store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            
            <ThemeProvider theme={theme}>
                <>
                    <App />
                    <GlobalStyles/>
                </>
            </ThemeProvider>
            
            </BrowserRouter>
        </Provider>, document.getElementById('root'))
})


