// components/ContactForm.js

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqgplzz");

  function redirectToPage() {
    if (state.succeeded) {
      // Redirect to index.js
      window.location.href = '/'; // Replace 'index.js' with the actual URL of your index page
    }
  }
  
  if (state.succeeded) {
    alert("Submitted Successfully.");
    redirectToPage();
  }
  

 // if (state.succeeded) {
 //   return alert("Submitted Successfully.");
 // }

  return (
    <div id='about'>
      <Navbar />
      <h2 className='h1'>Feel free to Contact us</h2><br /><br />
      <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.365322421687!2d75.90415777501707!3d17.680194183257825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db30d8f7179f%3A0x6a99aa149ce903d1!2sDEKHNE%20PATHOLOGY%20LABORATORY!5e0!3m2!1sen!2sin!4v1712750333935!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br /><br /><br />

      <div className='form'>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" onClick={redirectToPage} disabled={state.submitting} >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>

    

  );
};

export default ContactForm;
