import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import './Login.scss';

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

  return(
    <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
      <ModalBody>
        <h5 style={hpStyle}><b>HAF</b></h5>
        <p style={hpStyle}>By registering you agree to receive emails with our latest news, you can unsubscribe at any time.</p>
        <Button style={fbBtnStyle} ><i style={iStyle} className="fa fa-facebook"></i>Login By Facebook</Button>
        <Button style={googleBtnStyle}><i style={iStyle} className="fa fa-google"></i>Login By Gmail</Button>
        <Button style={ButtonStyle} onClick={toggleToRegister}><i style={iStyle} className="fa fa-envelope"></i>Register By Mail</Button>
        <h6><b>Sign In By mail :</b></h6>
        <Form>
          <input style={inputStyle} className="Username" type="text" placeholder="Username" rows={5} />
          <input style={inputStyle} className="Password" type="text" placeholder="Password" rows={5} />
          <div style={{"display":"flex","justify-content":"space-between","align-items":"center"}}>
            <Button style={{"background-color":"#1A75BB","border-color":"#1A75BB"}}>Login</Button>
            <a>Reset password</a>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
