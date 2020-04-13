import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Button from '../../components/UI/Button'
import * as actions from '../../store/actions'
import authReducer from '../../store/reducers/authReducer'
import Message from '../../components/UI/Message'
import styled from 'styled-components';
const FormWrapper = styled.div`
float:center;
width: 100%;
max-width: 50rem;
margin: 0 auto;
border-radius: 0.7rem;
padding: 4rem 8rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--color-main);
box-shadow:
    -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
    -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
    -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
    -50px -50px 85px rgba(255,255,255, 0.07),
    2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
    6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
    15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
    50px 50px 85px rgba(0, 0, 0, 0.07);
`;


const VerifyEmail = ({sendVerification, error, loading, cleanUp}) =>{
    useEffect(()=>{
        return ()=>{
            cleanUp()
        }
    }, [cleanUp])
    return (
        <FormWrapper>
            Verify your email.
            Go to your email inbox and please verify your email.
            <Button disabled={loading} loading={loading?'Sending email...':null} onClick={()=>sendVerification()}>Re-send verification email</Button>
            <Message error show={error}>{error}</Message>
            <Message success show={error===false}>Message sent successfully</Message>
        </FormWrapper>
    )
}
const mapStateToProps = ({auth})=>({
    loading: auth.verifyEmail.loading, 
    error: auth.verifyEmail.error
})
const mapDispatchToProps={
    sendVerification:actions.verifyEmail,
    cleanUp: actions.clean
}
export default connect(mapStateToProps,mapDispatchToProps)(VerifyEmail)