import React from 'react'
import NavItem from './Navitem'
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Nav = styled.nav`
display: flex;
`;
const NavItems = ({clicked, loggedIn}) =>{
    let links
    if (loggedIn.uid){
        links=(
            <Ul>
                <NavItem clicked={clicked} link='/'>Transactions</NavItem>
                <NavItem clicked={clicked} link='/portfolio'>Portfolio</NavItem>
                <NavItem clicked={clicked} link='/logout'>Logout</NavItem>
            </Ul>  
        )
    }
    else{
        links=(
            <Ul>
                <NavItem clicked={clicked} link='/login'>Login</NavItem>
                <NavItem clicked={clicked} link='/signup'>SignUp</NavItem>
            </Ul>  
        )
    }
    return (
        <Nav>
              {links}
        </Nav>
    )
}
export default NavItems