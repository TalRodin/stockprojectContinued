import React, {useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import {connect} from 'react-redux'
import * as actions from '../../store/actions'
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

const StyledForm = styled(Form)`
    color: rgba(51,51,51,1) ;
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

const H=styled.h3`
        @import url('https://fonts.googleapis.com/css?family=Lato');
        font-family: 'Lato', sans-serif;
        color: rgba(51,51,51,1) ;
        text-transform: uppercase;
        padding-bottom: 1rem;
        
`

const MessageWrapper=styled.div`
    position: absolute;
    bottom: 0;
`


const SignUpSchema = Yup.object().shape({
    firstName:Yup.string().required('Your first name is required')
    .min(3,'Too short').max(25, 'Too long'),
    lastName: Yup.string().required('Your last name is required')
    .min(3,'Too short').max(25, 'Too long'),
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required.').min(8,'The password is too short'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),null], 'Password does not match')
    .required('You need to confirm your password.')
})
const SignUp = ({signUp, loading, error, cleanUp}) =>{
    useEffect(()=>{
        return()=>{
            cleanUp()
        }
    },[cleanUp])
    return (
       
            <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'email',
                password:'password',
                confirmPassword: ''
            }}
            validationSchema={SignUpSchema}
            onSubmit={
                async( values, {setSubmitting})=>
                {
                    await signUp(values)
                    setSubmitting(false) 
                }
            }
            >{({isSubmitting, isValid})=>
            (
                <FormWrapper>
                    <H>Sign up for an account</H>
                    <StyledForm>
                        <Field type='firstName'
                            name='firstName'
                            placeholder='Your First Name...' 
                            component={Input}
                            />
                        {/* <ErrorMessage name='firstName'/> */}
                        <Field type='lastName'
                            name='lastName'
                            placeholder='Your Last Name...' 
                            component={Input}
                            />
                        {/* <ErrorMessage name='lastName'/> */}
                        <Field type='email'
                            name='email'
                            placeholder='Your Email...' 
                            component={Input}
                            />
                        {/* <ErrorMessage name='email'/> */}
                        <Field type='password'
                            name='password'
                            placeholder='Your Password...'
                            component={Input} />
                        {/* <ErrorMessage name='password'/> */}
                        <Field type='password'
                            name='confirmPassword'
                            placeholder='Confirm Password...'
                            component={Input} />
                        {/* <ErrorMessage name='confirmPassword'/> */}
                        <Button disabled={!isValid || isSubmitting} loading={loading ? 'Signing up' : null} type="submit">SignUp</Button>
                        
                        <MessageWrapper>

                            <Message error show={error}>{error}</Message>
                        </MessageWrapper>
                        


                    </StyledForm>
                </FormWrapper>
            )}
            </Formik>
      
    )
}
const mapStateToProps = ({auth}) =>({
    loading:auth.loading,
    error:auth.error
})
const mapDispatchToProps ={
    signUp: actions.signUp,
    cleanUp: actions.clean
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)