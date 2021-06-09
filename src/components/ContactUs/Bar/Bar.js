import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Bar.scss';
import {
  Navbar,
} from 'reactstrap';
import {
  Nav
} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import Contact from '../Contact/Contact';
import QR from '../QR/QR';
import Search from '../Search/Search';

const Bar = () => {
  const [navItems, setnavItems] = useState({"QR":true,"Contact":false});
  const [activeClass, setactiveClass] = useState({"QR":"active","Contact":""})
  const toggle = (Event) =>{

      switch (Event.target.id) {
          case "QRs":
              setnavItems({"QR":true,"Contact":false});
              setactiveClass({"QR":"active","Contact":""});
              break;
          case "Contacts":
              setnavItems({"QR":false,"Contact":true});
              setactiveClass({"QR":"","Contact":"active"});
              break;
          
      }
  }
  return(
    <div className="Bar" data-testid="Bar">
      <div className="navigation">
        <ul id="navs" navbar>
          <li>
            <a class={"link "+activeClass.QR} id="QRs" onClick={toggle}>QR</a>
          </li>
          <li>
            <a class={"link "+activeClass.Contact} id="Contacts" onClick={toggle}>Contact</a>
          </li>
        </ul>
            </div>
            <div>
                {navItems.QR ? <div><Search/><QR/></div> :null}
                {navItems.Contact ? <Contact/>:null}
            </div>
    </div>
  );
}

Bar.propTypes = {};

Bar.defaultProps = {};

export default Bar;
