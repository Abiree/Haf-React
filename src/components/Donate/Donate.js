import React,{useState} from 'react';
import './Donate.scss';
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Donate = (props) => {
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove=async(data, actions) => {
    const order = await actions.order.capture();
   
    console.log('ORDER', order);
};

  const [navItems, setnavItems] = useState({"paypal":true,"credit":false});
  const [activeClass, setactiveClass] = useState({"paypal":"active","credit":""});
  const toggle = (Event) =>{
    console.log("cont")
    console.log(Event.target.id)
    console.log(Event)
      switch (Event.target.id) {
          case "paypals":
              setnavItems({"paypal":true,"credit":false,"otheroption":false});
              setactiveClass({"paypal":"-active","credit":"","otheroption":""});
              break;
          case "credits":
              setnavItems({"paypal":false,"credit":true,"otheroption":false});
              setactiveClass({"paypal":"","credit":"-active","otheroption":""});
              break; 
          case "otheroptions":
              setnavItems({"paypal":false,"credit":false,"otheroption":true});
              setactiveClass({"paypal":"","credit":"","otheroption":"-active"});
              break;   
          default:
            break;
      }
  }
  return(
  <div className="Donate" data-testid="Donate">
     <div className="main" id="payement">
      <div className="container-fluid">
        <div className="DonateTo">
          <h5 >Donate to <strong>Project Name </strong>
          <div><p id="wi">and we will send you updates about your impact</p></div>
            
          </h5>
        </div>
        <div className="payements"> 
          <div className="paypal"> 
            <div className={"bar"+activeClass.paypal}></div>
            <h6  id="paypals" onClick={toggle} >paypal</h6>
          </div>
          <div className="creditcard"> 
            <div className={"bar"+activeClass.credit}></div>
            <h6 id="credits" onClick={toggle}>Credit Card</h6>
          </div>
          <div className="others">
            <div className={"bar"+activeClass.otheroption}></div>
            <h6 id="otheroptions" onClick={toggle}>others</h6>
          </div>
        </div>
        <div className="paragraph"> 
          <p>
            Please click the button below and follow the instructions
            provided to complete your $28.75 donation.
          </p>
        </div>
        <div>
                {navItems.paypal ? <div><div> 
                <PayPalButton style={{"z-index":"10px"}}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
        </div></div> :null}
                {navItems.credit ? <div>credit</div>:null}
                {navItems.otheroption ? <div>otheroption</div>:null}
            </div>
        
      </div>
    </div>
  </div>
);
  }



export default Donate;
