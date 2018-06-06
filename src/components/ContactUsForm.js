/*
 * Renders the form on Contact us page
*/

import React from 'react';
import validator from 'validator';
import ConfirmModal from './ConfirmModal';

class ContactUsForm extends React.Component {
  state = {
    isValid: false,
    name: '',
    email: '',
    comment: '',
    error: '',
    modalTitle: 'Thank You!',
    modalSubtitle: 'Any feedback and comments are welcome. We strive to build a better experience for you.'
  }
  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }
  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }
  handleCommentChange = (e) => {
    const comment = e.target.value;
    this.setState(() => ({ comment }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(this.state.email)) {
      this.setState(() => ({ error: 'Please enter valid email.'}));
    } else {
      this.setState(() => ({ 
        isValid: true,
        error: '' 
      }));
    }
  }
  handleCloseModal = () => {
    this.setState(() => ({ isValid: false }));
    this.props.history.push('/');
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="contactus-container-split">
        <h3 className="contactus__subtitle">Feeling formal?</h3>
        <p className="contactus__subtitle-below">Fill this out and we'll get back to you.</p>
        <form className="contactus-form" onSubmit={this.onSubmit}>
          <h3>Name</h3>
          <input 
            type="text" 
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <h3>Email Address</h3>
          <input 
            type="text" 
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          {this.state.error ? <p className="footer__email-error">{this.state.error}</p> : ''}
          <h3>Comments</h3>
          <textarea 
            className="contactus-form-textbox"
            value={this.state.comment}
            onChange={this.handleCommentChange}  
          />
          <button className="button__contactus">Send Message</button>
        </form> 
        <ConfirmModal
          modalTitle={this.state.modalTitle}
          modalSubtitle={this.state.modalSubtitle}
          isValid={this.state.isValid}
          handleCloseModal={this.handleCloseModal}
        />   
      </div>
    )
  }
}

export default ContactUsForm;