/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import {Control , LocalForm , Errors} from 'react-redux-form';
import FacebookLogin from 'react-facebook-login';
import './Login.scss';
import { getUser } from '../../../redux/actionCreators/LoginRegisterCreator';

const Login = (props) => {
  const {modal,toggle,toggleRegister,unmountOnClose} = props;
  const hpStyle = {
    "text-align":"center",
  };
  const ButtonStyle = {
    "display":"block",
    "width":"100%",
    "margin":"10px 0px 10px 0px", 
  };
  const fbBtnStyle={
    ...ButtonStyle,
    "background-color":"#1A75BB",
    "border-color":"#1A75BB"
  };
  const googleBtnStyle={
    ...ButtonStyle,
    "background-color":"#FF5F5F",
    "border-color":"#FF5F5F"
  };
  const inputStyle = {
    "outline": "0",
    "border-width": "0 0 1px",
    "border-color":"grey",
    "border-radius":"0px",
    "margin":"0px 0px 10px 0px",
    "width":"100%",
    "padding":"10px"
  };
  const iStyle = {
    "margin-right":"10px"
  }
  const closeLogin = async()=>{
    toggle();
  }
  const toggleToRegister = () =>{
    closeLogin().then(toggleRegister());
  }
  /*-----------------formvalidation-----------------------*/
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => val && (val.length >= len);
  const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
  const handleSubmit = (values) => {
    console.log(values)
    const {Email,password} = values;
    props.Login(Email,password);
    toggle();
    
     
  }
  const responseFacebook = (response) => {
    console.log(response);
    console.log(response.picture.data.url);
    const user={
      "name":response.name,
      "email":response.email,
      "picture":response.picture.data.url,
      "type":"fb"
    }
    props.getUser(user);
    toggle();
  }
  return(
    <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
      <ModalBody>
        <h5 style={hpStyle}><b>HAF</b></h5>
        <p style={hpStyle}>By registering you agree to receive emails with our latest news, you can unsubscribe at any time.</p>
        <FacebookLogin

          appId="352508136238884"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          icon="fa-facebook"
          textButton=" Login By Facebook"
        />
        <Button style={googleBtnStyle}><i style={iStyle} className="fa fa-google"></i>Login By Gmail</Button>
        <Button style={ButtonStyle} onClick={toggleToRegister}><i style={iStyle} className="fa fa-envelope"></i>Register By Mail</Button>
        <h6><b>Sign In By mail :</b></h6>
        <LocalForm onSubmit = {(values)=> handleSubmit(values)}>
          <Control.text
            model=".Email"
            id="Email"
            name="Email"
            style={inputStyle}
            className="form-control"
            placeholder="user@email.com"
            rows={5} 
            validators={{
              required,
              validEmail
            }}
          />
          <Errors
            className="text-danger"
            model=".Email"
            show="touched"
            messages={{
              required: 'Required, ',
              validEmail: 'Not a valid email'
            }}
          />
          <Control
            model=".password"
            id="password"
            name="password"
            type="password"
            style={inputStyle}
            className="form-control"
            placeholder="Password"
            rows={5}
            validators={{
              required,
              minLength: minLength(6),
              maxLength: maxLength(15)
            }}
          />
          <Errors
            className="text-danger"
            model=".password"
            show="touched"
            messages={{
              required: 'Required, ',
              minLength: 'Must be greater than 6 characters',
              maxLength: 'Must be 15 characters or less'
            }}
          />
          <div style={{"display":"flex","justify-content":"space-between","align-items":"center"}}>
            <Button type="submit" style={{"background-color":"#1A75BB","border-color":"#1A75BB"}}>Login</Button>
            <a>Reset password</a>
          </div>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
};


export default Login;
