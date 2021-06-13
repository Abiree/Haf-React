/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import './Bar.scss';
import Contact from '../Contact/Contact';
import QR from '../QR/QR';
import Search from '../Search/Search';

const Bar = (props) => {
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
          default:
            break;
      }
  }
  return(
    <div className="Bar" data-testid="Bar">
      <div className="navigation">
        <ul id="navs">
          <li>
            <a href="#" className={"link "+activeClass.QR} id="QRs" onClick={toggle}>QR</a>
          </li>
          <li>
            <a href="#" className={"link "+activeClass.Contact} id="Contacts" onClick={toggle}>Contact</a>
          </li>
        </ul>
            </div>
            <div>
                {navItems.QR ? <div><Search/><QR questions={props.questions} /></div> :null}
                {navItems.Contact ? <Contact/>:null}
            </div>
    </div>
  );
}

export default Bar;
