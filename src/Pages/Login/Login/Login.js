import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check mail for reset password');
        }
        else {
            toast('Plese enter emaill');
        }
    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleUserLogin = async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://warm-island-25044.herokuapp.com/login', { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        // navigate(from, { replace: true });
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    return (
        <div className='container'>

            <div className='w-50 mx-auto'>
                <div>
                    <h2 className='text-center'>Please Login</h2>
                    <form onSubmit={handleUserLogin}>
                        <div className="mb-3 mt-3">
                            <label for="email">Email:</label>
                            <input onBlur={handleEmailBlur} type="email" className="form-control" placeholder="Enter email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label for="pwd">Password:</label>
                            <input onBlur={handlePasswordBlur} type="password" className="form-control" id="password" placeholder="Enter password" name="password" required />
                        </div>
                        {errorMessage}
                        <div className='text-center'>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <div>
                    <p>New User? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Register Now</Link></p>
                    <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none pe-auto' onClick={resetPassword}>Reset Your Password</button></p>
                </div>
            </div>




            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;