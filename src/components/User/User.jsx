import React from 'react';
import './User.css';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <div className="user-dashboard">
            <h1>User Dashboard</h1>
            <div className="user-info">
                <img className='profile' src={user.photoURL} alt="" />
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email} </p>
            </div>
            <div className="actions">
            <button onClick={handleLogout} className="btn-logout mx-2">Logout</button>
            </div>
        </div>
    );
};

export default User;
