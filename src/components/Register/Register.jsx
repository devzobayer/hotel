import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, updateProfile,  GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { auth } from '../firebase/firebase';
import { sendVerificationEmail } from '../firebase/sendEmailVerification';
import { useNavigate } from 'react-router-dom';
import Gimg from '../Login/search.png'
import RegImg from './register.png'




const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(''); // Success message
    const [error, setError] = useState(''); // Error message
      const navigate = useNavigate();
      const provider = new GoogleAuthProvider();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Clear errors
        setSuccess('');
        setError('');

        // Validation Logic
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: username });
            await sendVerificationEmail(userCredential.user);
            setSuccess('Registration successful! Please check your email for verification.');
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after registration
            }, 2000);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setSuccess('');
    try {
        await signInWithPopup(auth, provider);
        setSuccess('Logged in Successfully with Google');
        setTimeout(() => {
            navigate(from);
        }, 500);
    } catch (error) {
        setError(error.message);
    }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <img src={RegImg} className='reg-img' alt="" />

                {success && <div className="alert alert-success" role="alert">{success}</div>}
                {error && <div className="alert alert-danger" role="alert">{error}</div>}

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-register mt-4">Register</button>
            <button onClick={handleGoogleSignIn} className="btn-google d-flex align-items-center ">
                 <img className='g-img' src={Gimg} alt="" />
                Sign in with Google
            </button>

            </form>
           
        </div>
    );
};

export default Register;
