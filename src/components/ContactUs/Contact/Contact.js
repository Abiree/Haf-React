/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {Control , LocalForm , Errors} from 'react-redux-form';
import './Contact.scss';

const Contact = (props) => {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => val && (val.length >= len);
  const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
  const handleSubmit = (values) =>{
    //console.log(values);
    props.addQuestion(values.Name,values.Email,values.Subject,values.message);
  }
  return(
    <div className="Contact" data-testid="Contact">
      <LocalForm onSubmit={(values)=> handleSubmit(values)} className="form"> 
          <label>Send a message :</label>
          <Control.text
            model=".Name"
            id="Name"
            name="Name"
            className="form-control" 
            placeholder="Name"
            validators={{
              required,
              minLength : minLength(3),
              maxLength : maxLength(20),
            }}/>
          <Errors
            className="text-danger"
            model=".Name"
            show="touched"
            messages={{
              required: 'Required, ',
              minLength: 'Must be greater than 3 characters',
              maxLength: 'Must be 20 characters or less'
            }}
          />
          <Control.text
            model=".Email"
            id="Email"
            name="Email"
            className="form-control"
            placeholder="Email"
            validators={{
              required,
              validEmail
            }}/>
          <Errors
            className="text-danger"
            model=".Email"
            show="touched"
            messages={{
              required: 'Required, ',
              validEmail: 'Not a valid email'
            }}
          />
          <Control.text
            model=".Subject"
            id="Subject"
            name="Subject"
            className="form-control" 
            placeholder="Subject"
            validators={{
              required,
              minLength : minLength(3),
              maxLength : maxLength(20),
            }}/>
          <Errors
            className="text-danger"
            model=".Subject"
            show="touched"
            messages={{
              required: 'Required, ',
              minLength: 'Must be greater than 3 characters',
              maxLength: 'Must be 20 characters or less'
            }}
          />
          <Control.textarea 
            model=".message"
            id="message" 
            name="message" 
            rows="6" 
            className="form-control"
            placeholder="message"
            validators={{
              required,
              minLength : minLength(10),
              maxLength : maxLength(50),
            }}>
          </Control.textarea>
          <Errors
            className="text-danger"
            model=".message"
            show="touched"
            messages={{
              required: 'Required, ',
              minLength: 'Must be greater than 10 characters',
              maxLength: 'Must be 50 characters or less'
            }}
          />
          <div className="button">
            <button className="btn btn-primary" type="submit">submit</button>
          </div>
        </LocalForm>
    </div>
  );
};

export default Contact;
