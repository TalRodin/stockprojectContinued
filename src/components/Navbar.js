import React from 'react'
import Logo from './Logo'
import NavItems from './Navitems'
import styled from 'styled-components'

const Wrapper = styled.div`
    position:fixed;
    display:flex;
    justify-content:space-between;
    top:0;
    left:0;
    width:100%;
    height: 6rem;
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