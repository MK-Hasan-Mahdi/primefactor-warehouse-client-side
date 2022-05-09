import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
        // const url = `https://warm-island-25044.herokuapp.com/login`;
        // const {data} = await fetch(url,{
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(email)
        // })
        // .then(res => res.json())
        // .then(info => {
        //     console.log(info);
        // })

        // console.log(email);
        // console.log(password);
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
            <h2 className='text-center'>Please Login</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleUserLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-primary rounded-pill mx-auto d-block w-50" type="submit">
                        Login
                    </Button>
                    {errorMessage}
                </Form>
                <p>New User? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Register Now</Link></p>
                <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none pe-auto' onClick={resetPassword}>Reset Your Password</button></p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;