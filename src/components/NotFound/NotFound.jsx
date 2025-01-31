import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
        <h1>404</h1>
        <p>Sorry, the page you are looking for is not found.</p>
        <a href="/">Go to Home</a>
    </div>
  );
}

export default NotFound;