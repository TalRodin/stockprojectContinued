import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {Formik, Field, Form} from 'formik'
import styled from 'styled-components'
import Message from '../../components/UI/Message'
import * as Yup from 'yup'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import * as actions from '../../store/actions/authActions';
import Modal from '../../components/UI/Modal'



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
const DeleteWrapper = styled.div`
    cursor:pointer;
    color: red;
    font-size:1.3rem;
    font-weight: 700;
    transition: all 0.2s;

    &:hover{
        transform: translateY(-3px)
    }
    &:active{
        transform: translateY(2px)
    }
`
const ButtonWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
`

const ProfileSchema = Yup.object().shape({
    firstName:Yup.string().required('Your first name is required')
    .min(3,'Too short').max(25, 'Too long'),
    lastName: Yup.string().required('Your last name is required')
    .min(3,'Too short').max(25, 'Too long'),
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .min(8,'The password is too short'),
    confirmPassword: Yup.string().when('password', {
        is: password => password.length >0,
        then: Yup.string()
        .required('You need to confirm your password.')
        .oneOf([Yup.ref('password'),null], 'Password does not match')
    })

})

const Profile = ({firebase,editProfile, close, loading, error, cleanUp, loadingDelete, errorDelete, deleteUser,}) =>{
    useEffect(()=>{
        return ()=>{
            cleanUp();
        }
    },[cleanUp])
    const [modalOpened, setModalOpened] = useState(false)
    if (!firebase.profile.isLoaded) return null;
    return (
       <>
            <Formik
            initialValues={{
                firstName: firebase.profile.firstName,
                lastName: firebase.profile.lastName,
                email: firebase.auth.email,
                password: '',
                confirmPassword: '',
              }}
            validationSchema={ProfileSchema}
            onSubmit={

                async( values, {setSubmitting})=>
                {
                    await editProfile(values)
                    setSubmitting(false) 
                }
            }
            >{({isSubmitting, isValid})=>
            (
                <FormWrapper>
                    <H>Edit your profile</H>
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
                        <Button disabled={!isValid || isSubmitting} loading={loading ? 'Editing...':null} type="submit">Edit</Button>
                        
                        <MessageWrapper>
                            <Message error show={error}>{error}</Message>
                        </MessageWrapper>
                        <MessageWrapper>
                            <Message success show={error===false}>Profile was updated!</Message>
                        </MessageWrapper>
                        <DeleteWrapper onClick={()=>setModalOpened(true)}>Delete my account</DeleteWrapper>
                    </StyledForm>
                </FormWrapper>
            )}
            </Formik>
            <Modal opened={modalOpened} close={()=>setModalOpened(false)}>
                <H>
                    Delete your account
                </H>
                <H>
                    Do you really want to delete your account?
                </H>
                <ButtonWrapper>
                    <Button contain onClick={()=>deleteUser()} color='red' disabled={loadingDelete} loading={loadingDelete ? 'Deleting...':null}
                    >Delete</Button>
                    <Button contain OnClick={()=>setModalOpened(false)}>Cancel</Button>
                </ButtonWrapper>
                <MessageWrapper>
                    <Message error show={errorDelete}>
                        {errorDelete}
                    </Message>
                </MessageWrapper>
            </Modal>
            </>
    )
}

const mapStateToProps = ({firebase,auth}) =>({
    firebase,
    loading: auth.profileEdit.loading,
    error:auth.profileEdit.error,
    loadingDelete:auth.deleteUser.loading,
    errorDelete:auth.deleteUser.error,
    
})
const mapDispatchToProps ={
    editProfile: actions.editProfile,
    cleanUp: actions.clean,
    deleteUser: actions.deleteUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)