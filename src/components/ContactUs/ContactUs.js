import React from 'react';
import PropTypes from 'prop-types';
import './ContactUs.scss';
import Forum from './Forum/Forum';
import BarRouter from './BarRouter/BarRouter';
import Contact from './Contact/Contact';
const ContactUs = () => (
  <div className="ContactUs" data-testid="ContactUs">
     <Forum/>
     <BarRouter/>
     <Contact/>
  </div>
  
);

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
