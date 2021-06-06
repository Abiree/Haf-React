import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './UpBar.scss';
import {  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button} from 'reactstrap';

const UpBar = (props) => {

  const [isOpen , setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <div>
    <Navbar id="nav" light expand="md">
      <NavbarBrand id="brand" href="/">HAF</NavbarBrand>
      <NavbarToggler id="toggler" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav id="navigation" className="justify-content-end" navbar>
          <NavItem id="navitem">
            <NavLink id="link" href="/" active>Home</NavLink>
          </NavItem>
          <NavItem id="navitem">
            <NavLink id="link" href="/project">Projects</NavLink>
          </NavItem>
          <NavItem id="navitem">
            <NavLink id="link" href="/">Market</NavLink>
          </NavItem >
          <NavItem id="navitem">
            <NavLink id="link" href="/">ContactUs</NavLink>
          </NavItem>
          <NavItem id="navitem">
            <Button id="btn">Login</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>  
  );
}

UpBar.propTypes = {};

UpBar.defaultProps = {};

export default UpBar;
