import React, { useState } from 'react';
import '../styles/contact.css'
import Header from '../components/Header';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && query) {
      alert(`Thank you, ${name}! Your query has been submitted. We will contact you soon.`);
      setName('');
      setEmail('');
      setQuery('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="contact">
      <Header/>
      <br /><br />
      <div className="contact-us-container"><section className="content-section">
        <h1 className='hd'>Contact Us</h1>
        <p>
          Have questions or need assistance? We're here to help! Reach out to us for any inquiries about our courses, placements, or branches. Our team is always ready to assist you.
        </p>
      </section>

      {/* Branches Section */}
      <section className="branches-section">
        <h2 className='hd'>Our Branches in India</h2>
        <ul className="branches-list">
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Bangalore</li>
          <li>Hyderabad</li>
          <li>Chennai</li>
          <li>Pune</li>
          <li>Kolkata</li>
          <li>Mysore</li>
          <li>Jaipur</li>
          <li>Lucknow</li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2 className='hd'>Send Us a Query</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="query">Your Query:</label>
            <textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section></div>
    </div>
  );
};

export default ContactUs;