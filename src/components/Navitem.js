import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


const Li = styled.li`
    display: flex;
    height: 100%;
    cursor: pointer;
`;
const StyledNavLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-bottom:2px solid transparent;
    padding: 1 rem;
    margin: 0 1rem;
    color: rgba(51,51,51,1);
    align-items:center;
    
`;

const Buttonwrap =styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
    // box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.7) ,-5px -5px 10px rgba(255,255,255,0.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color:aliceblue;
    background:transparent;
    border: 0;
    outline: 0;
    border-radius: 50px;
    padding-top:10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    // background-color:#f7f7f7;
    background-color:#272727;
    // text-shadow: 1px 1px 0 #FFF;
    // &:hover {
    //   box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
    // }
    &:active {
    //   box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.7) , inset -5px -5px 10px rgba(255,255,255,0.1);
}
    
        
`

const NavItem = ({link, children, clicked}) =>{
    
    return (
        <Li>
            <StyledNavLink  onClick={clicked} to={link}>
                <Buttonwrap>
                    {children}
                </Buttonwrap>
            </StyledNavLink>
        </Li>
    )
}

export default NavItem