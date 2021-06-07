import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';
import { Button, Col, Nav, Row } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Footer = (props) => {
  const {location} = props;
  return(
    <div className="Footer" data-testid="Footer">
      <div className="Header">
        <h5>Get connected with us on social networks:</h5>
        <div className="SocialMedia">
          <a><i className="fa fa-facebook"></i></a>
          <a><i className="fa fa-linkedin"></i></a>
          <a><i className="fa fa-instagram"></i></a>
          <a><i className="fa fa-twitter"></i></a>
        </div>
      </div>
      <hr/>
      <Row className="row">
        <Col xs="12"  md="4" className="col">
          
          <div className="content">
            <h5>HAF in Morocco</h5>
            <p>
              <a className="fa fa-map-marker"/>
              Résidence Adam, n° 5, Rue Omar Ibn Khattab, Marrakech 40025, Maroc
            </p>
            <p>
              <a className="fa fa-envelope"/>
              haf@highatlasfoundation.org
            </p>
            <p>
              <a className="fa fa-phone"/>
              +212 (0) 5 24 42 08 21
            </p>
            <p>
              <a className="fa fa-fax"/>
              +212 (0) 5 24 43 00 02
            </p>
          </div>
        </Col>

        <Col xs="12"  md="4" className="col">
        
          <div className="content"> 
            <h5>HAF in Morocco</h5>
            <p>
              <a className="fa fa-map-marker"/>
              Résidence Adam, n° 5, Rue Omar Ibn Khattab, Marrakech 40025, Maroc
            </p>
            <p>
              <a className="fa fa-envelope"/>
              haf@highatlasfoundation.org
            </p>
            <p>
              <a className="fa fa-phone"/>
              +212 (0) 5 24 42 08 21
            </p>
            <p>
              <a className="fa fa-fax"/>
              +212 (0) 5 24 43 00 02
            </p>
          </div>
        </Col>

        <Col  xs="12"  md="4" className="col">
          <div className="content">
            <h5>Links</h5>
            <Nav className="nav" activeKey={location.pathname}>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/project">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/market">Market</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
      </Row>
      <div class="copyright">
        <p>© 2021 Copyright:HAF</p>
      </div>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};
const FooterWithRouter = withRouter(Footer);

export default FooterWithRouter;
