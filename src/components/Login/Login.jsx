import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { sendVerificationEmail } from '../firebase/sendEmailVerification';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Gimg from './search.png';

import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showResendVerification, setShowResendVerification] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const message = location.state?.message || '';
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (!userCredential.user.emailVerified) {
                setError('Please verify your email before logging in.');
                setShowResendVerification(true);
                return;
            }
            console.log('Logged in:', userCredential.user);
            setSuccess('Logged in Successfully');
            setTimeout(() => {
                navigate(from);
            }, 500);
        } catch (error) {
            console.log(error.code);
            console.error(error.message);
            
            if (error.code === 'auth/wrong-password') {
                setError('Password not match');
            } else if (error.code === 'auth/user-not-found') {
                setError('User not found');
            } else if (error.code === 'auth/email-already-in-use') {
                setError('Already exists this user');
            } else if (error.code === 'auth/invalid-credential') {
                setError('You are not registered account');
                setTimeout(() => {
                    navigate('/register');
                }, 1000);
            } else {
                setError(error.message);
            }
        }
    };

    const googleAuthHandle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setSuccess('Logged in Successfully with Google');
            setTimeout(() => {
                navigate(from);
            }, 500);
        } catch (e) {
            setError(e.message);
        }
    };

    const facebookAuthHandle = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            setSuccess('Logged in Successfully with Facebook');
            setTimeout(() => {
                navigate(from);
            }, 500);
        } catch (e) {
            setError(e.message);
        }
    };

    const handleResendVerification = async () => {
        setError('');
        setSuccess('');
        try {
            await sendVerificationEmail();
            setSuccess('Verification email sent. Please check your inbox.');
        } catch (error) {
            console.error('Error sending verification email:', error);
            setError('Error sending verification email.');
        }
    };

    return (
        <div className='background'>
            {message && <div className="alert alert-warning m-0 " role="alert">{message}</div>}
            <div className="container">
                <div className="login-container">
                    <p className='create-user'>New User? <Link className='create-account' to="/register">Create an account</Link></p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        {success && <div className="alert alert-success" role="alert">{success}</div>}
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <div className='mt-4'>
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button className='login-button' type="submit">Sign In</button>
                    </form>
                    <div className="social-auth d-flex align-items-center">
                        <button className="g-btn" onClick={googleAuthHandle}>
                            <img className='g-img' src={Gimg} alt="" />
                            <span className='g-btn-text'>Sign In with Google</span>
                        </button>
                        <button className="f-btn" onClick={facebookAuthHandle}>
                            <span className='f-btn-text'> Facebook</span>
                        </button>
                        {showResendVerification && (
                            <button className='verify-btn mx-2' onClick={handleResendVerification}>Verify Email</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;