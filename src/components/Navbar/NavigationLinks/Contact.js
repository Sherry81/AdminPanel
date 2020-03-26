import React from 'react';
import NavigationBar from '../NavigationBar';
import Footer from '../../Footer/Footer';
import './Contact.css'

function Contact() {
  return (
    <div>
      <NavigationBar/>
      <div className="contact">
        <h2 className="contactHead">Contact: 0332-2079206</h2>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
