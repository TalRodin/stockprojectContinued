import React from 'react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import { values } from 'd3';
import Login from './Login';
import {connect} from 'react-redux'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import styled from 'styled-components'
import Message from '../../components/UI/Message'
import * as actions from '../../store/actions'




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

const StyledForm = styled(Form)`
    color: rgba(51,51,51,1) ;
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

const RecoverSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.')
})

const RecoverPassword = ({sendEmail, error, loading, cleanUp}) =>{
    return (
        <Formik initialValues = {{
            email: ''
        }}
        validationSchema={
            RecoverSchema
        }
        onSubmit={async (values, {setSubmitting}) => {
            await sendEmail(values)
            setSubmitting(false)
        }}
        >
        {(isSubmitting, isValid )=>(
            <FormWrapper>
            <h1>Recover your password</h1>
            <h4>Type in your e-mail to recover your password</h4>
            <StyledForm>
            <Field type="email" name="email" placeholder="Type your email..." component={Input}/>
            <Button
            //   disabled={!isValid || isSubmitting}
              loading={loading ? 'Sending recover email...' : null}
              type="submit"
            >
              Recover email
            </Button>
            <Message error show={error}>{error}</Message>
            <Message success show={error===false}>Message sent successfully</Message>
            </StyledForm>
            </FormWrapper>
        )}
        </Formik>
        
    )
}

const mapStateToProps = ({auth}) =>({
    loading:auth.recoverPassword.loading,
    error:auth.recoverPassword.error
})
const mapDispatchToProps ={
    sendEmail:actions.recoverPassword
}
export default connect(mapStateToProps,mapDispatchToProps)(RecoverPassword)