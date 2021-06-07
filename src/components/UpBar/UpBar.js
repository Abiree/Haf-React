import React,{useState} from 'react';
import PropTypes from 'prop-types';
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



const UpBar = (props) => {
  const {location} = props;
  const [isOpen , setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(location);

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
            <Button id="btn">Login</Button>
          </Nav.Item>
        </Nav>
      </Collapse>
    </Navbar>
  </div>  
  );
}

UpBar.propTypes = {};

UpBar.defaultProps = {};

const HeaderWithRouter = withRouter(UpBar);

export default HeaderWithRouter;
