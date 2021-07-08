import React,{useState} from 'react';

import { Button, Modal, ModalBody } from 'reactstrap';
import {
  Redirect
} from "react-router-dom";
import './Creditpop.scss';

const Creditpop = (props) => {
  console.log(props)
  const [alert , setAlert] = useState(false);
  const [toNext, setToNext] = useState(false)
  const {modal,toggle,unmountOnClose} = props;
  const hpStyle = {
    "text-align":"center",
  };
  const [input, setInput] = useState('');
  
  const handleSubmit = (values) => {
    console.log(input)
    if(props.user.userDetail == null || input=="" ){
      console.log(input)
      setAlert(true);
      console.log(values)
      
    }
    else{
      console.log(input)
      
      console.log(values)
     
      setToNext(true)
    }
    
  }
  return(
    <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody>
      <h5 style={hpStyle}><b>Buy Credit Carbon</b></h5>
      <p style={hpStyle}>Enter the number of credit carbon that you want to buy</p>
  
      <div className="input-group mb-3">
          <input className="form-control" type="number" aria-label="Amount (to the nearest dirham)" placeholder="Number of Carbon Credit..." value={input} onInput={e => setInput(e.target.value)}/><span className="input-group-text" style={{"background-color":"#1A75BB","color":"white"}}><b>$</b></span>
          {alert? <p style={{"color":"red","width":"100%","display":"flex","justify-content":"center", "margin-top":"20px"}}>You should login</p>:null }
      </div>
        <div style={{"display":"flex","justify-content":"center","align-items":"center"}}>
        {toNext ? <Redirect to={{
            pathname: '/buy',
            state: { input: {input},
            name:"Credit Carbon" }
        }} /> : null}
          <Button type="submit" style={{"background-color":"#1A75BB","border-color":"#1A75BB"}} onClick={handleSubmit}>Buy</Button>
        </div>
    </ModalBody>
  </Modal>
)};



export default Creditpop;