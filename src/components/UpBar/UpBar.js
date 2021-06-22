import React,{useState} from 'react';
import './UpBar.scss';
import {  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem , NavItem ,
  Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';

/************************NavProfil*******************/
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
/********************Navbar***************************/
const HeaderWithRouter = (props) => {
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
        <Nav id="navigation" className="justify-content-end" navbar>
          <NavItem id="navitem">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </NavItem>
          <NavItem id="navitem">
            <NavLink className="nav-link" to="/project">Projects</NavLink>
          </NavItem>
          <NavItem id="navitem">
            <NavLink className="nav-link" to="/Market">Market</NavLink>
          </NavItem>
          <NavItem id="navitem">
            <NavLink  className="nav-link" to="/ContactUs">ContactUs</NavLink>
          </NavItem>
          <NavItem id="navitem">
            {props.user.userDetail===null?<Button id="btn" onClick={toggleLoginModal}>Login</Button>:<NavLink className="nav-link" to="#"><NavProfil image={props.user.userDetail.picture} name={props.user.userDetail.name} logout={props.logout}/></NavLink>}
          </NavItem>
          <NavItem id="navitem">
            <NavLink className="nav-link" to="/shop">
              <div id="cart" className="d-none">
              </div>
              <a href="/store/cart.stml" className="cart position-relative d-inline-flex" aria-label="View your shopping cart">
                <i className="fas fa fa-shopping-cart fa-lg"></i>
                <span className="cart-basket d-flex align-items-center justify-content-center">
                  {props.cart.length}
                </span>
              </a>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <Login modal={loginmodal} toggle={toggleLoginModal} toggleRegister={toggleRegisterModal} unmountOnClose={loginunmountOnClose} Login={props.Login}/>
    <Register modal={registermodal} toggle={toggleRegisterModal} toggleLogin={toggleLoginModal} unmountOnClose={registerunmountOnClose} />
  </div> 
  );
}


export default HeaderWithRouter;
