import React,{useState} from 'react';
import './UpBar.scss';
import {  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,
  Button} from 'reactstrap';
  import { Link } from 'react-router-dom';
  import Image from "react-bootstrap/Image";
import {
  Nav
} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
 
const NavProfil = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
 
  const logout = () => {
    props.logout();
}
  return(
    <div style={{"display":"flex","align-items":"center","height":"3vh" }}>
      <Image style={{"margin-right":"5px"}} width="25px" height="25px" src={"http://hafbackend.herokuapp.com/api/images/"+props.image} roundedCircle/>
      
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={{"margin-bottom":"0px", "color":"black","background-color": "transparent","border-color":"transparent","width": "fit-content"}}>
         {props.name} 
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem  tag={Link} to="/profil">Your Profile</DropdownItem>
        <DropdownItem onClick={logout} >Logout</DropdownItem>
       
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}

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
            {props.user.userDetail===null?<Button id="btn" onClick={toggleLoginModal}>Login</Button>:<Nav.Link><NavProfil image={props.user.userDetail.picture} name={props.user.userDetail.name} logout={props.logout} /></Nav.Link>}
          </Nav.Item>
          <Nav.Item id="navitem">
            <Nav.Link href="/shop">
              <div id="cart" className="d-none">
              </div>
              <a href="/store/cart.stml" className="cart position-relative d-inline-flex" aria-label="View your shopping cart">
                <i className="fas fa fa-shopping-cart fa-lg"></i>
                <span className="cart-basket d-flex align-items-center justify-content-center">
                  {props.cart.length}
                </span>
              </a>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Collapse>
    </Navbar>
    <Login modal={loginmodal} toggle={toggleLoginModal} toggleRegister={toggleRegisterModal} unmountOnClose={loginunmountOnClose} Login={props.Login}/>
    <Register modal={registermodal} toggle={toggleRegisterModal} toggleLogin={toggleLoginModal} unmountOnClose={registerunmountOnClose} />
  </div> 
  );
}

const HeaderWithRouter = withRouter(UpBar);

export default HeaderWithRouter;
