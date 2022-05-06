import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { SiGmail } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { Button } from 'react-bootstrap';


const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorMessage;
    if (errorGoogle || errorGithub) {
        errorMessage = <p className='text-danger'>Error: {errorGoogle?.message} {errorGithub?.message}</p>

    }
    if (loadingGoogle || loadingGithub) {
        return <Loading></Loading>
    }

    if (userGoogle || userGithub) {
        navigate("/home");
    }
    return (
        <div>
            <h6 className='text-center'>Continue with others Account</h6>

            <div className='w-50 mx-auto mb-2'>
                <Button onClick={() => signInWithGoogle()} variant="outline-primary rounded-pill mx-auto d-block" type="submit">
                    <div className='d-flex align-items-center justify-content-center'>
                        <span className='px-2'><SiGmail></SiGmail></span>
                        <span>Login with Gmail</span>
                    </div>
                </Button>
                <Button onClick={() => signInWithGithub()} variant="outline-primary rounded-pill mx-auto d-block my-2" type="submit">
                    <div className='d-flex align-items-center justify-content-center'>
                        <span className='px-2'><SiGithub></SiGithub></span>
                        <span>Login with Github</span>
                    </div>
                </Button>
                {errorMessage}
            </div>
        </div>
    );
};

export default SocialLogin;