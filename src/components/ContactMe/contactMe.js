"use client"

import React, { useState } from 'react';
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import "./contactMe.css";


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      {/* <h1 className="contact-title">Let's Connect</h1> */}
      <div className="contact-grid">
        {/* Contact Information Card */}
        <div className="contact-card">
          <div className="contact-card-content">
            <div className="contact-section">
              <h2 className="SubHead">All of my Contact Information</h2>
              <p className="SubSub mb-10">
                I'm open to opportunities and collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              <div className="flex gap-10 items-center">
                <Mail className="icon" />
                <a href="mailto:benlouis.contact@gmail.com" className="contact-link Pop24">
                  Benlouis.contact@gmail.com
                </a>
              </div>

              <div className="Pop24  flex gap-10 items-center">
                <MapPin className="icon" width={24} height={24}/>
                <span>Vancouver, Canada</span>
              </div>
            </div>

            <div className="social-section">
              <h3 className="SubHead">Connect with me</h3>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/bl.graphic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Pop24 flex gap-10 items-center underline-animation thin"
                >
                  <Instagram className="icon" />
                  <span className="">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>                </a>

                <a
                  href="https://www.linkedin.com/in/ben-louis-001116308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Pop24  flex gap-10 items-center underline-animation thin"
                >
                  <Linkedin className="icon" />
                  <span>LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        {/* <div className="contact-card">
          <div className="contact-card-content">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                <Send className="icon" />
                Send Message
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactMe;