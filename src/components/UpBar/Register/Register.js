/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './Register.scss';

const inputStyle = {
  "outline": "0",
  "border-width": "0 0 1px",
  "border-color": "grey",
  "border-radius": "0px",
  "margin": "0px 0px 10px 0px",
  "width": "100%",
  "padding": "10px"
};
const hpStyle = {
  "text-align": "center"
};
const ButtonStyle = {
  "margin": "0px 5px 0px 5px",
  "width": "130px"
};
const ButtonStyleActive = {
  ...ButtonStyle,
  "background-color": "black"
};
/* -----------------formvalidation----------------------- */
const required = ( val ) => val && val.length;
const maxLength = ( len ) => ( val ) => !( val ) || ( val.length <= len );
const minLength = ( len ) => ( val ) => val && ( val.length >= len );
const isNumber = ( val ) => !isNaN( Number( val ) );
const validEmail = ( val ) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( val );

const OrganisationForm = ( props ) => {
  const { toggle } = props;
  const handleSubmit = ( values ) => {
    console.log( values )
    const { OrganisationName, Adresse, Phone, Email, Password } = values;
    props.OrganisationRegister( OrganisationName, Adresse, Phone, Email, Password );
    toggle()
  }
  return ( <LocalForm onSubmit={( values ) => handleSubmit( values )}>
    <Control.text model=".OrganisationName" id="OrganisationName" name="OrganisationName" style={inputStyle} className="form-control" placeholder="OrganisatioName" rows={5} validators={{
        required,
        minLength: minLength( 3 ),
        maxLength: maxLength( 15 )
      }}/>
    <Errors className="text-danger" model=".OrganisationName" show="touched" messages={{
        required: 'Required, ',
        minLength: 'Must be greater than 3 characters',
        maxLength: 'Must be 15 characters or less'
      }}/>
    <Control.text model=".Adresse" id="Adresse" name="Adresse" style={inputStyle} className="form-control" placeholder="Adresse" rows={5} validators={{
        required,
        minLength: minLength( 3 ),
        maxLength: maxLength( 15 )
      }}/>
    <Errors className="text-danger" model=".Adresse" show="touched" messages={{
        required: 'Required, ',
        minLength: 'Must be greater than 3 characters',
        maxLength: 'Must be 15 characters or less'
      }}/>
    <Control.text model=".Phone" id="Phone" name="Phone" style={inputStyle} className="form-control" placeholder="Phone" rows={5} validators={{
        required,
        isNumber,
        minLength: minLength( 3 ),
        maxLength: maxLength( 15 )
      }}/>
    <Errors className="text-danger" model=".Phone" show="touched" messages={{
        required: 'Required, ',
        isNumber: 'Not a number',
        minLength: 'Must be greater than 3 characters',
        maxLength: 'Must be 15 characters or less'
      }}/>
    <Control.text model=".Email" id="Email" name="Email" style={inputStyle} className="form-control" placeholder="Email" rows={5} validators={{
        required,
        validEmail
      }}/>
    <Errors className="text-danger" model=".Email" show="touched" messages={{
        required: 'Required, ',
        validEmail: 'Not a valid Email'
      }}/>
    <Control model=".password" id="password" name="password" type="password" style={inputStyle} className="form-control" placeholder="Password" rows={5} validators={{
        required,
        minLength: minLength( 6 ),
        maxLength: maxLength( 15 )
      }}/>
    <Errors className="text-danger" model=".password" show="touched" messages={{
        required: 'Required, ',
        minLength: 'Must be greater than 6 characters',
        maxLength: 'Must be 15 characters or less'
      }}/>
    <div style={{
        "display" : "flex",
        "justify-content" : "space-between",
        "align-items" : "center"
      }}>
      <Button type="submit" style={{
          "background-color" : "#1A75BB",
          "border-color" : "#1A75BB"
        }}>Register</Button>
      <a>Reset password</a>
    </div>
  </LocalForm> );
}

const IndividuForm = ( props ) => {
  const { toggle } = props;

  const handleSubmit = ( values ) => {
    console.log(values)
    const { FirstName, LastName, Email, password } = values;
    props.IndividuRegister( FirstName, LastName, Email, password );
    toggle();

  }
  return ( <LocalForm onSubmit={( values ) => handleSubmit( values )}>
    <Control.text model=".FirstName" id="FirstName" name="FirstName" style={inputStyle} className="form-control" placeholder="FirstName" rows={5} validators={{
        required,
        minLength: minLength( 3 ),
        maxLength: maxLength( 15 )
      }}/>
    <Errors className="text-danger" model=".FirstName" show="touched" messages={{
        required: 'Required, ',
        minLength: 'Must be greater than 3 characters',
        maxLength: 'Must be 15 characters or less'
      }}/>
    <Control.text model=".LastName" id="LastName" name="LastName" style={inputStyle} className="form-control" placeholder="LastName" rows={5} validators={{
        required,
        minLength: minLength( 3 ),
        maxLength: maxLength( 15 )
      }}/>
    <Errors className="text-danger" model=".LastName" show="touched" messages={{
        required: 'Required, ',
        minLength: 'Must be greater than 3 characters',
        maxLength: 'Must be 15 characters or less'
      }}/>
    <Control.text model=".Email" id="Email" name="Email" style={inputStyle} className="form-control" placeholder="Email" rows={5} validators={{
        required,
        validEmail
      }}/>
    <Errors className="text-danger" model=".Email" show="touched" messages={{
        required: 'Required, ',
        validEmail: 'Not a valid email'
      }}/>
    <Control model=".password" id="password" name="password" type="password" style={inputStyle} className="form-control" placeholder="Password" rows={5} validators={{
        required,
        minLength: minLength( 6 ),
        maxLength: maxLength( 15 )
      }}/>
    <Errors className="text-danger" model=".password" show="touched" messages={{
        required: 'Required, ',
        minLength: 'Must be greater than 6 characters',
        maxLength: 'Must be 15 characters or less'
      }}/>
    <div style={{
        "display" : "flex",
        "justify-content" : "space-between",
        "align-items" : "center"
      }}>
      <Button type="submit" style={{
          "background-color" : "#1A75BB",
          "border-color" : "#1A75BB"
        }}>Register</Button>
      <a>Reset password</a>
    </div>
  </LocalForm> );
}

const Register = ( props ) => {
  const { modal, toggle, unmountOnClose, toggleLogin } = props;
  const [buttonstate, setButtonstate] = useState( { "Individu": true, "Organisation": false } );

  const changeActiveButton = ( Event ) => {
    console.log( Event.target.id );
    switch ( Event.target.id ) {
      case "organisation":
        setButtonstate( { "Individu": false, "Organisation": true } );
        break;
      case "individu":
        setButtonstate( { "Individu": true, "Organisation": false } );
        break;
      default:
        break;
    }
  };
  const closeRegister = async () => {
    toggle();
  }
  const toggleToLogin = () => {
    closeRegister().then( toggleLogin() );
  }

  return ( <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody>
      <h5 style={hpStyle}>
        <b>HAF</b>
      </h5>
      <p style={hpStyle}>
        <b>Already have an account ?</b>
        <a href="#" onClick={toggleToLogin}>Login</a>
      </p>
      <div style={{
          "display" : "flex",
          "justifyContent" : "center"
        }}>
        <Button id="individu" onClick={changeActiveButton} style={buttonstate.Individu
            ? ButtonStyleActive
            : ButtonStyle}>Individu</Button>
        <Button id="organisation" onClick={changeActiveButton} style={buttonstate.Organisation
            ? ButtonStyleActive
            : ButtonStyle}>Organisation</Button>
      </div>
      <h6 style={{
          "margin-top" : "10px"
        }}>
        <b>Register :</b>
      </h6>
      {
        buttonstate.Individu
          ? <IndividuForm toggle={toggle} IndividuRegister={props.IndividuRegister}/>
          : <OrganisationForm toggle={toggle} OrganisationRegister={props.OrganisationRegister}/>
      }
    </ModalBody>
  </Modal> );
};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
