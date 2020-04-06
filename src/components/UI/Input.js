import React from 'react'
import styled from 'styled-components'

const InputWrapper=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: rgba(51,51,51,1) ;
    position:relative;
    margin-bottom: 2.5rem;
    &::last-of-type{
      margin-bottom: 4.5rem;
    }
`
const StyledInput = styled.input`
    padding: 1.2rem 2rem;
    box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #fff;
    color: rgba(51,51,51,1) ;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    width:100%;
    
    background-color:var(--color-main);
    border-radius: 3rem;
    -webkit-appearance: none;
    border: 0;
      outline: 0;
      text-shadow: 1px 1px 0 #fff;
    &:focus {
      box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff;
    }
`;

const Error=styled.div`
    color: #f1555a;
    font-weight: 700;
    font-size: 1rem;
    padding: 0rem 2rem;
    position:absolute;
    bottom: 0;
    left:0;
    visibility: ${({show}) => (show ? 'visibile' : 'hidden')}
    opacity: ${({show})=>(show ? '1' : '0')};
    transform: translateY(${({show})=>(show ? '20px' : '10px')});
    transition: all 0.1s;
    font-family: 'Lato', sans-serif;
    @import url('https://fonts.googleapis.com/css?family=Lato');

`

const Input = ({field, form:{touched, errors}, ...props})=>{
    return (
        <InputWrapper>
          <StyledInput {...field} {...props}/>
          <Error show={errors[field.name] && touched[field.name]}>{errors[field.name]}</Error>
        </InputWrapper>
    )
}
export default Input