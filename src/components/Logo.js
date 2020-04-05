import React from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
    padding: 1rem;
    color: rgba(51,51,51,1);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
    display: flex;
    height: 100%;
    display-items: center;
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