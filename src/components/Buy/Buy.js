import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Buy.scss';
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Buy = (props) => {
  let total=0;
  //console.log(props)
  //console.log(props.location.state.input)
  //console.log(props.location.state.name)
  props.location.state.name=="Trees" ?  total=Number(props.location.state.input.input) :total=Number(props.location.state.input.input)*8;
  //console.log(total)
  const createOrder = (data, actions) =>{
    
   
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: Number.parseFloat(total).toFixed(2).toString(),
          },
        },
      ],
    });
  };

  const onApprove=async(data, actions) => {
    const order = await actions.order.capture();
    
    console.log('ORDER', order);
};

  const [navItems, setnavItems] = useState({"paypal":true,"otheroption":false});
  const [activeClass, setactiveClass] = useState({"paypal":"-active","otheroption":""});
  const toggle = (Event) =>{
    
    
      switch (Event.target.id) {
          case "paypals":
              setnavItems({"paypal":true,"otheroption":false});
              setactiveClass({"paypal":"-active","otheroption":""});
              break;
         
          case "otheroptions":
              setnavItems({"paypal":false,"otheroption":true});
              setactiveClass({"paypal":"","otheroption":"-active"});
              break;   
          default:
            break;
      }
  }
  return(
  <div className="Buy" data-testid="Buy">
    <div className="main" id="payement">
      <div className="container-fluid">
        <div className="DonateTo">
          <h5 >Buy  <strong>{props.location.state.name} </strong>
            
          </h5>
        </div>
        <div className="payements"> 
          <div className="paypal"> 
            <div className={"bar"+activeClass.paypal}></div>
            <h6  id="paypals" onClick={toggle} >Paypal/Credit Card</h6>
          </div>
          
          <div className="others">
            <div className={"bar"+activeClass.otheroption}></div>
            <h6 id="otheroptions" onClick={toggle}>others</h6>
          </div>
        </div>
        <div className="paragraph"> 
          <p>
            Please click the button below and follow the instructions
            provided to complete your  {Number.parseFloat(total).toFixed(2)} $ .
          </p>
        </div>
        <div>
                {navItems.paypal ? <div><div> 
                <PayPalButton style={{"z-index":"10px"}}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
        </div></div> :null}
                
                {navItems.otheroption ? <div>otheroption</div>:null}
            </div>
        
      </div>
    </div>
  </div>
);
  }

Buy.defaultProps = {};

export default Buy;