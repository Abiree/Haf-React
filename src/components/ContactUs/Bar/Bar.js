import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Bar.scss';
import {  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button} from 'reactstrap';
import {
  Nav
} from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const Bar = (props) => {
  const {location} = props;
  console.log(location);
  return(
    <div className="Bar" data-testid="Bar">
      <Navbar className="nav" activeKey="{location.pathname}">
        <Nav id="navigation" defaultActiveKey="/ContactUs" navbar>
          <Nav.Item>
              <Nav.Link href="/QA">Q&A</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav.Item>
        </Nav>
       

      </Navbar>
    </div>
  );
}

Bar.propTypes = {};

Bar.defaultProps = {};

export default Bar;
