import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = event => {
        event.preventDefault();
        signInWithGoogle();
    }

    if(user){
        navigate(from, {replace: true})
    }
    return (
        <div>
            <div className='d-flex align-items-center my-4'>
                <div style={{ height: '3px' }} className='bg-dark w-100'></div>
                <div><span className='mx-2 fw-bold'>Or</span></div>
                <div style={{ height: '3px' }} className='bg-dark w-100'></div>
            </div>
            {error?.message}
            <div>
                <button onClick={handleGoogleSignIn} className='btn btn-dark text-white w-50 d-block mx-auto mb-3 p-2 fs-5 fw-light'>Google Sign In</button>
                <button className='btn btn-dark text-white w-50 d-block mx-auto mb-3 p-2 fs-5 fw-light'>Facebook Sign In</button>
                {/* <button onClick={handleGithubSignIn} className='btn btn-dark text-white w-50 d-block mx-auto p-2 fs-5 fw-light'>Github Sign In</button> */}
            </div>
        </div>
    );
};

export default SocialLogin;