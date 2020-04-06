import React from 'react'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import styled from 'styled-components'

const MainWrapper=styled.div`
 width: 100%;
 min-height:calc(100vh-6rem);
 margin-top: 6rem;
 display: flex;
 align-items:center;
 justify-content:center;
`

const Layout = ({children, loggedIn}) =>(
  
  <>
      <Navbar loggedIn={loggedIn}/> 
      <MainWrapper>
          {children}
      </MainWrapper>
  </>
)
const mapStateToProps = ({firebase}) =>({
  loggedIn: firebase.auth
})
export default connect(mapStateToProps)(Layout)