import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
    const sendVerifyEmail = async () => {
        await sendEmailVerification(auth.currentUser)
            .then(() => {
                toast("Verification email sent")
            })
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!name || !email || !password) {
            alert("please fill up all section")
        }
        else {

            await createUserWithEmailAndPassword(email, password);
            sendVerifyEmail();
            event.target.reset();
        }
    }
    // if (user) {
    //     navigate('/home')
    // }

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Please Register</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary rounded-pill mx-auto d-block w-50" type="submit">
                        Register
                    </Button>
                </Form>
                <div className='text-center pt-4'>
                    <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Login</Link></p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;