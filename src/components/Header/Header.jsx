import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../AuthContext/AuthContext';


const Header = () => {
    const { user, loading, logout } = useAuth();

    return (
        <header className="header-container">
            <div className="header-logo">Hotel MZ</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/roomlist">Room</Link></li>
            </ul>
            <div className="header-buttons d-flex align-items-center ">
                {
                   user ? (
                    <>
                        <span className='user-name'> {user.displayName}</span>
                        <button onClick={logout} className="btn-logout mx-2">Logout</button>
                    </>
                ) : (
                    <Link className='login-btn' to="/login">Sign in</Link>
                
                )}
       
            </div>
        </header>
    );
};

export default Header;