/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import { Button, Modal, ModalBody,  Form } from 'reactstrap';
import './Register.scss';

const inputStyle = {
  "outline": "0",
  "border-width": "0 0 1px",
  "border-color":"grey",
  "margin":"0px 0px 10px 0px",
  "width":"100%",
  "padding":"10px"
};
const hpStyle = {
  "text-align":"center"
};
const ButtonStyle = {
  "margin":"0px 5px 0px 5px", 
  "width":"130px"
};
const ButtonStyleActive = {
  ...ButtonStyle,
  "background-color":"black"
};

const OrganisationForm = (props)=>{
  return(
    <Form>
      <input style={inputStyle} className="OrganisatioName" type="text" placeholder="OrganisatioName" rows={5} />
      <input style={inputStyle} className="Adresse" type="text" placeholder="Adresse" rows={5} />
      <input style={inputStyle} className="Phone" type="text" placeholder="Phone" rows={5} />
      <input style={inputStyle} className="Email" type="text" placeholder="Email" rows={5} />
      <input style={inputStyle} className="Password" type="text" placeholder="Password" rows={5} />
      <div style={{"display":"flex","justify-content":"space-between","align-items":"center"}}>
        <Button style={{"background-color":"#1A75BB","border-color":"#1A75BB"}}>Register</Button>
        <a>Reset password</a>
      </div>
    </Form>
  );
}

const IndividuForm = (props)=>{
  return(
    <Form>
      <input style={inputStyle} className="FirstName" type="text" placeholder="FirstName" rows={5} />
      <input style={inputStyle} className="LastName" type="text" placeholder="LastName" rows={5} />
      <input style={inputStyle} className="Email" type="text" placeholder="Email" rows={5} />
      <input style={inputStyle} className="Password" type="text" placeholder="Password" rows={5} />      
      <div style={{"display":"flex","justify-content":"space-between","align-items":"center"}}>
        <Button style={{"background-color":"#1A75BB","border-color":"#1A75BB"}}>Register</Button>
        <a>Reset password</a>
      </div>
    </Form>
  );
}

const Register = (props) => {
  const {modal,toggle,unmountOnClose,toggleLogin} = props;
  const [buttonstate, setButtonstate] = useState({"Individu":true,"Organisation":false});

  const changeActiveButton = (Event) => {
    console.log(Event.target.id);
    switch (Event.target.id) {
      case "organisation":
        setButtonstate({"Individu":false,"Organisation":true});
        break;
      case "individu":
        setButtonstate({"Individu":true,"Organisation":false});
        break;  
      default:
        break;
    }
  };
  const closeRegister = async()=>{
    toggle();
  }
  const toggleToLogin = () =>{
    closeRegister().then(toggleLogin());
  }

  return(
    <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
      <ModalBody>
        <h5 style={hpStyle}><b>HAF</b></h5>
        <p style={hpStyle}><b>Already have an account ?</b> <a href="#" onClick={toggleToLogin}>Login</a></p>
        <div style={{"display":"flex","justifyContent":"center"}}>
          <Button id="individu" onClick={changeActiveButton} style={buttonstate.Individu ? ButtonStyleActive:ButtonStyle }>Individu</Button>
          <Button id="organisation" onClick={changeActiveButton} style={buttonstate.Organisation ? ButtonStyleActive:ButtonStyle}>Organisation</Button>
        </div>
        <h6 style={{"margin-top":"10px"}}><b>Register :</b></h6>
        {buttonstate.Individu ? <IndividuForm/> : <OrganisationForm/>}
      </ModalBody>
    </Modal>
  );
};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
