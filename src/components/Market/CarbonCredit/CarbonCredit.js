import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './CarbonCredit.scss';
import {
  Redirect
} from "react-router-dom";

const CarbonCredit = (props) => {
  const [input, setInput] = useState('');
  const [toNext, setToNext] = useState(false)
  const handleSubmit = (values) => {
    console.log(input)
      
    console.log(input)
    if(props.profile == null || input=="" ){
      console.log(input)
      
      console.log(values)
      
    }
    else{
      console.log(input)
      
      console.log(values)
      setToNext(true)
    }
    
  }
  return(
  <div className="CarbonCredit" data-testid="CarbonCredit">
    <div className="treeName"> 
        <h2 id="green"><b>Buy Carbon Offset Credits –per tCO2e </b></h2>
      </div>
      <div className="project"> 
            <div className="projectImage">
              <img className="img-fluid" src=".././assets/carbon.png" alt="projectimg"/>
            </div>
            <div className="projectDonation">
              <div className="flex"> 
                <p id="price">8$ /1 Carbon Credit</p>
              </div>
                <div className="priceInput"> 
                <div className="input-group mb-3">
                  <input className="form-control" type="text" aria-label="Amount (to the nearest dirham)" id="widh" placeholder="Number of Carbon Credit..." value={input} onInput={e => setInput(e.target.value)}/><span className="input-group-text"><b>Carbon Credit</b></span>
                  {toNext ? <Redirect to={{
                      pathname: '/buy',
                      state: { input: {input},
                      name:"Credit Carbon"
                   }
                  }} /> : null}
                  <div id="place"><button className="btn btn-primary" type="button" onClick={handleSubmit} ><b>Buy</b></button></div>
                  
                </div>
              </div>
            </div>
          </div>
  
  
  </div>
);
}

CarbonCredit.propTypes = {};

CarbonCredit.defaultProps = {};

export default CarbonCredit;
