import React from 'react'
import Logo from './Logo'
import NavItems from './Navitems'
import styled from 'styled-components'

const Wrapper = styled.div`
    position:fixed;
    display:flex;
    justify-content:space-between;
    top:1%;
    left:0;
    width:99.5%;
    // background-color:#272727;
    height: 8rem;
    border-radius: 8px;
    box-shadow: inset -8px -8px 8px 0 rgba(174, 174, 192, 0.25), inset 8px 8px 8px 0 #fff, -8px -8px 24px 0 #fff, 8px 8px 24px 0 rgba(174, 174, 192, 0.4);
`

const Navbar = ({loggedIn})=>{
    return (
        <Wrapper>
            <Logo />
            <NavItems loggedIn={loggedIn}/>
        </Wrapper>
    )
}
export default Navbar

// Drop Shadow
// -8px -8px 24px 0 #ffffff
// 8px 8px 24px 0 #AEAEC0 40%

// Inner Shadow
// -8px -8px 8px 0 #AEAEC0 25%
// 8px 8px 8px 0 #FFFFFF

// inset -8px -8px 8px 0 rgba(174, 174, 192, 0.25), inset 8px 8px 8px 0 #fff, -8px -8px 24px 0 #fff, 8px 8px 24px 0 rgba(174, 174, 192, 0.4);


