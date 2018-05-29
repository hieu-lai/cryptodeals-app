import React from 'react';
import ContactUsForm from './ContactUsForm';
import ContactUsLinks from './ContactUsLinks';

const ContactUsPage = (props) => (
  <div className="content-container">
    <h1 className="contactus__title">Get in Touch</h1>
    <div className="contactus-container">
      <ContactUsForm history={props.history}/>
      <ContactUsLinks />
    </div>  
  </div>
);

export default ContactUsPage;