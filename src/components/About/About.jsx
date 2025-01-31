import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our hotel booking service. We are located in the beautiful city of Manikganj.</p>
      <div className="address-section">
        <h2>Our Address</h2>
        <p>123 Hotel Street</p>
        <p>Manikganj, Bangladesh</p>
        <p>Phone: +880 1234 567890</p>
        <p>Email: info@hotelbooking.com</p>
      </div>
      <div className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902568611497!2d90.41251831543161!3d23.8103329845647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b8a1b1e1f1%3A0x1e1b1e1b1e1b1e1b!2sManikganj%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1633021234567!5m2!1sen!2sbd"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Hotel Location"
        ></iframe>
      </div>
    </div>
  );
}

export default About;