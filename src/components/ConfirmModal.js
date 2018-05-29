/*
 * Renders modal
*/

import React from 'react';
import Modal from 'react-modal';

const ConfirmModal = (props) => (
  <Modal
    className="modal"
    isOpen={props.isValid}
    onRequestClose={props.handleCloseModal}
    contentLabel="Confirmation"
    closeTimeoutMS={200}
  >
    <h1>{props.modalTitle}</h1>  
    <p>{props.modalSubtitle}</p>  
    <button className="button__modal" onClick={props.handleCloseModal}>Close</button>
  </Modal>  
);

export default ConfirmModal;