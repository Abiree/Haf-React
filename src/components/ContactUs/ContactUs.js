import React from 'react';
import './ContactUs.scss';
import Forum from './Forum/Forum';
import Bar from './Bar/Bar';
const ContactUs = (props) => (
  <div className="ContactUs" data-testid="ContactUs">
     <Forum/>
     <Bar questions={props.questions}/>
  </div>  
);

export default ContactUs;
