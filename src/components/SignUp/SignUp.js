import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [errorMessage, setErrorMessage] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const from = location.state?.from?.pathname || "/";

    const handleUserSignUp = async event => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if(password === confirmPassword){
            await createUserWithEmailAndPassword(email, password)

            fetch('https://young-spire-99179.herokuapp.com/getToken',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('accessToken', data.accessToken);
            const token = data.accessToken;
            if(token){
                navigate(from, { replace: true })
            }
        })

            await updateProfile({ displayName })
            await sendEmailVerification()
            toast('Email verification mail sent')
        }
        else{
            setErrorMessage('Your Password Mismatched')
        }
    }

    if(updating || sending || loading){
        <Loading></Loading>
    }

    
    return (
        <div className='row'>
            <hr className='mt-4' />
            <h2 className='text-center mb-4'>Sign Up Here</h2>
            <hr />
            <div style={{ minHeight: "400px" }} className='col-lg-6 col-md-8 col-10 mx-auto bg-secondary p-4 rounded my-5 py-5'>
                <Form onSubmit={handleUserSignUp}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control className='bg-dark b-none text-white p-3' name="name" type="text" placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control className='bg-dark b-none text-white p-3' name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="confirmPassword" type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <p>Already Have An Account?  <span className='text-info btn p-0 mb-1' onClick={() => navigate('/login')}>Login Here</span></p>
                    </Form.Group>

                    <p className='text-white'>{error?.message} {errorMessage}</p>

                    <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 d-block fw-light' variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;