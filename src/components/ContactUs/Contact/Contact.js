/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {Control , LocalForm , Errors} from 'react-redux-form';
import './Contact.scss';
import emailjs from 'emailjs-com';

const Contact = (props) => {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => val && (val.length >= len);
  const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_x8h9x2r','template_x5tyb3o',e.target,'user_AlsM5ajWpSisaQVkFn6cS')
    .then((result)=>{
      alert(result.text)
    })
    .catch((err)=>{
      alert(err.text)
    });
    e.target.reset();

  }

  return(
    <div className="Contact" data-testid="Contact">
      <form onSubmit={handleSubmit}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="name"/>
          </div>
          <div className="col-8 form-group mx-auto">
            <input type="email" className="form-control" placeholder="Email" name="email"/>
          </div>
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
          </div>
          <div className="col-8 form-group mx-auto">
            <textarea className="form-control" cols="30" rows="8" placeholder="your message ..." name="message"/>
          </div>
          <div className="col-8 form-group mx-auto">
            <input type="submit" className="btn btn-info" value="Send message"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
