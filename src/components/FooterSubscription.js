import React from 'react';
import validator from 'validator';
import EmailModal from './EmailModal';

class FooterSubscription extends React.Component {
  state = {
    email: '',
    error: '',
    isValid: false
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;

    if(!validator.isEmail(email)) {
      this.setState(() => ({ error: 'Please enter a valid email.'}))
    } else {
      this.setState(() => ({ 
        error: '',
        isValid: true 
      }));    
    }
  };
  handleOnChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }
  handleCloseModal = () => {
    this.setState(() => ({ 
      email: '',
      isValid: false 
    }));
  }

  render() {
    return (
      <div>
        <h3>Stay In Touch</h3>
        <p>Get the latest updates and news.</p>
        <form className="footer--form" onSubmit={this.handleOnSubmit}>
          <input 
            className="text-input__email" 
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />          
          <button className="button__email">Submit</button>
          {this.state.error ? <p className="footer__email-error">{this.state.error}</p> : ''}
        </form>
        <EmailModal 
          isValid={this.state.isValid}
          handleCloseModal={this.handleCloseModal}
        />  
      </div>
    )
  };
}

export default FooterSubscription;