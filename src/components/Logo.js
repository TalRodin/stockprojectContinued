import React from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    text-transform: uppercase;
    font-size: 14px;
    padding-top: 30px;
    padding-left: 16px;
    padding-right: 16px;
    letter-spacing: -0.2px;
    display: absolute;
    float:left;
    color: rgba(51,51,51,1) ;
    font-family: 'Lato', sans-serif;
    border-bottom:2px solid transparent;
    font-weight: bold;
    text-shadow: 1px 1px 1px #FFF;
`


const Logo = () =>{
    return (
        <LogoWrapper>
            Portfolio
        </LogoWrapper>
    )
}
export default Logo