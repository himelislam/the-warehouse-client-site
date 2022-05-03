import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLoginWithEmailAndPassword = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
    }

    if(user){
        console.log(user);
        navigate('/')
    }

    const handleResetPassword = event => {

    }
    return (
        <div style={{minHeight: "400px"}} className='w-50 mx-auto bg-secondary p-4 rounded my-5 py-5'>
            <Form onSubmit={handleLoginWithEmailAndPassword}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control className='bg-dark b-none text-white p-3' name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control className='bg-dark b-none text-white p-3' name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <p>New User?  <span className='text-info btn p-0 mb-1' onClick={() => navigate('/signup')}> Create A New Account.</span></p>
                    <p>Forget Password?  <span onClick={handleResetPassword} className='text-info btn p-0 mb-1'> Reset Password.</span></p>
                </Form.Group>

                <p className='text-white'>{error?.message}</p>

                <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 fw-light d-block' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;