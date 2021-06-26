import React,{useState,useEffect} from 'react';

import { Button, Modal, ModalBody } from 'reactstrap';
import {
  Redirect
} from "react-router-dom";
import './Donationpop.scss';

const Donationpop = (props) => {

  const [alert , setAlert] = useState(false);
  const [toNext, setToNext] = useState(false)
  const {modal,toggle,unmountOnClose} = props;
  const hpStyle = {
    "text-align":"center",
  };
  
  const handleSubmit = (values) => {
    if(props.user.userDetail !== null){
      setToNext(true)
      console.log(values)
    }
    else{
      setAlert(true);
    }
    
  }
  return(

    <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody>
      <h5 style={hpStyle}><b>Donate</b></h5>
      <p style={hpStyle}>Enter your Amount</p>
  
      <div className="input-group mb-3">
          <input className="form-control" type="number" aria-label="Amount (to the nearest dirham)" placeholder="Amount ..."/><span className="input-group-text" style={{"background-color":"#1A75BB","color":"white"}}><b>$</b></span>
          {alert? <p style={{"color":"red","width":"100%","display":"flex","justify-content":"center", "margin-top":"20px"}}>You should login</p>:null }
      </div>
        <div style={{"display":"flex","justify-content":"center","align-items":"center"}}>
        {toNext ? <Redirect to="/donate" /> : null}
          <Button type="submit" style={{"background-color":"#1A75BB","border-color":"#1A75BB"}} onClick={handleSubmit}>Donate</Button>
        </div>
    </ModalBody>
  </Modal>
);
}



export default Donationpop;
