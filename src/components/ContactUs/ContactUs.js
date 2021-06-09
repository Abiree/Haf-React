import React from 'react';
import PropTypes from 'prop-types';
import './ContactUs.scss';
import Forum from './Forum/Forum';
import Bar from './Bar/Bar';
import Contact from './Contact/Contact';
const ContactUs = () => (
  <div className="ContactUs" data-testid="ContactUs">
     <Forum/>
     <Bar/>
  </div>
  
);

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
