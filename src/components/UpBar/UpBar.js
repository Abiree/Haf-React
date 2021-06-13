import React,{useState} from 'react';
import './UpBar.scss';
import {  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button} from 'reactstrap';
import {
  Nav
} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';

const UpBar = (props) => {
  const {location} = props;
  const [isOpen , setIsOpen] = useState(false);
  /*----------------------------login---------------------------------*/
  const [loginmodal, setloginModal] = useState(false);
  const [loginunmountOnClose] = useState(false);
  const toggleLoginModal = () => setloginModal(!loginmodal);
  /*----------------------------Register-------------------------------*/
  const [registermodal, setregisterModal] = useState(false);
  const [registerunmountOnClose] = useState(false);
  const toggleRegisterModal = () => setregisterModal(!registermodal);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <div>
    <Navbar id="nav" light expand="md">
      <NavbarBrand id="brand" href="/">HAF</NavbarBrand>
      <NavbarToggler id="toggler" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav id="navigation" className="justify-content-end" activeKey={location.pathname} defaultActiveKey="/" navbar>
          <Nav.Item id="navitem">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item id="navitem">
            <Nav.Link href="/project">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item id="navitem">
            <Nav.Link href="/Market">Market</Nav.Link>
          </Nav.Item >
          <Nav.Item id="navitem">
            <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
          </Nav.Item>
          <Nav.Item id="navitem">
            <Button id="btn" onClick={toggleLoginModal}>Login</Button>
          </Nav.Item>
        </Nav>
      </Collapse>
    </Navbar>
    <Login modal={loginmodal} toggle={toggleLoginModal} toggleRegister={toggleRegisterModal} unmountOnClose={loginunmountOnClose}/>
    <Register modal={registermodal} toggle={toggleRegisterModal} toggleLogin={toggleLoginModal} unmountOnClose={registerunmountOnClose}/>
  </div>  
  );
}

const HeaderWithRouter = withRouter(UpBar);

export default HeaderWithRouter;
