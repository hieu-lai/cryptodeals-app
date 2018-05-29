/*
 * Renders the partnership form
*/

import React from 'react';
import validator from 'validator';
import ConfirmModal from './ConfirmModal';

class Partnership extends React.Component {
  state = {
    isValid: false,
    firstName: '',
    lastName: '',
    companyName: '',
    website: '',
    contactNumber: '',
    email: '',
    error: '',
    modalTitle: 'Welcome Aboard!',
    modalSubtitle: "We'll be in contact with you very soon."
  }
  handleFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  }
  handleLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  }
  handleCompanyNameChange = (e) => {
    const companyName = e.target.value;
    this.setState(() => ({ companyName }));
  }
  handleWebsiteChange = (e) => {
    const website = e.target.value;
    this.setState(() => ({ website }));
  }
  handleContactNumberChange = (e) => {
    const contactNumber = e.target.value;
    if (!contactNumber || contactNumber.match(/^\d{1,}(\ \d{0,})?$/)) {
      this.setState(() => ({ contactNumber }));
    }  
  }
  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(this.state.email)) {
      this.setState(() => ({ error: 'Please enter a valid email.'}));
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
      <div className="content-container">
        <h1 className="partnership__title">Advertise on CryptoDeals</h1>
        <form className="partnership-form" onSubmit={this.onSubmit}>
          <h3>Name</h3>
          <div className="partnership-container">
            <div>
              <input
                className="partnership-input" 
                type="text" 
                autoFocus 
                required 
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
              <p>First</p>
            </div>
            <div className="partnership-empty-div"></div>
            <div>  
              <input 
                type="text" 
                required 
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
              />
              <p>Last</p>
            </div>  
          </div>
          <h3>Company</h3>
          <div className="partnership-container">
            <div>
              <input 
                type="text" 
                required 
                value={this.state.companyName}
                onChange={this.handleCompanyNameChange}
              />
              <p>Name</p>
            </div>
            <div className="partnership-empty-div"></div>
            <div>  
              <input 
                type="text" 
                value={this.state.website}
                onChange={this.handleWebsiteChange}
              />
              <p>Website<span> *optional</span></p>
            </div>  
          </div>  
          <h3>Contact Number</h3>
          <input 
            type="text" 
            required 
            value={this.state.contactNumber}
            onChange={this.handleContactNumberChange}
          />
          <h3>Email Address</h3>
          <input 
            type="text" 
            required 
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          {this.state.error ? <p>{this.state.error}</p> : ''}
          <button className="button__partnership">Get Listed</button>
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
};

export default Partnership;