import React,{useState,useEffect} from 'react';
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
import Cart from './cart';

/************************NavProfil*******************/
const NavProfil = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const logout = () => {
    props.logout();
}
//console.log(props)
//console.log(props.image)



const [images, setImages] = useState( { "image": "" } );
useEffect(()=>{if(props.type=="fb"){
  setImages({"image":props.image})
 
}
else{
  setImages({"image":"http://hafbackend.herokuapp.com/api/images/"+props.image})
  
}},[])


return(
    <div style={{"display":"flex","align-items":"center","height":"3vh" }}>
      <Image style={{"margin-right":"5px"}} width="25px" height="25px" src={images.image} roundedCircle/>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={{"margin-bottom":"0px", "color":"black","background-color": "transparent","border-color":"transparent","width": "fit-content","padding":"0px 8px 0px 8px"}}>
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
  
  /*-------------------------------------------------------------------*/
  const toggle = () => setIsOpen(!isOpen);
  console.log(props.user);
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
          <NavItem id="navitem" style={{"display":"flex","justify-content":"center","align-items":"center"}}>
            {props.user.userDetail===null?<Button id="btn" onClick={toggleLoginModal}>Login</Button>:<NavProfil image={props.user.userDetail.picture} name={props.user.userDetail.name} logout={props.logout} type={props.user.userDetail.type}/>}
          </NavItem>
          <NavItem id="navitem" style={{"display":"flex","justify-content":"center","align-items":"center"}}>
            
              {props.user==null ? null : <Cart userLoading={props.user.isLoading} removeFromCart={props.removeFromCart} user = {props.user.userDetail} trees={props.trees}   />}
            
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <Login modal={loginmodal} toggle={toggleLoginModal} toggleRegister={toggleRegisterModal} unmountOnClose={loginunmountOnClose} Login={props.Login} getUser={props.getUser}/>
    <Register modal={registermodal} toggle={toggleRegisterModal} toggleLogin={toggleLoginModal} unmountOnClose={registerunmountOnClose}  IndividuRegister={props.IndividuRegister}  OrganisationRegister={props.OrganisationRegister} />
  </div> 
  );
}


export default HeaderWithRouter;
