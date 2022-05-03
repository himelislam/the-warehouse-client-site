import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const handleUserSignUp = async event  => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName})
        console.log(email, password);
    }

    if(user){
        console.log(user);
        navigate('/')
    }
    return (
        <div style={{ minHeight: "400px" }} className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
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

                <p className='text-white'>{error?.message}</p>

                <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 d-block fw-light' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;