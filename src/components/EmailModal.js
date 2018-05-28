import React from 'react';
import Modal from 'react-modal';

const EmailModal = (props) => (
  <Modal
    className="modal"
    isOpen={props.isValid}
    onRequestClose={props.handleCloseModal}
    contentLabel="Email Confirmation"
    closeTimeoutMS={200}
  >
    <h1>Thank You!</h1>  
    <p>
      You will receive the latest deals and news without lifting a finger. 
      Happy trading!
    </p>  
    <button className="button__modal" onClick={props.handleCloseModal}>Close</button>
  </Modal>  
);

export default EmailModal;