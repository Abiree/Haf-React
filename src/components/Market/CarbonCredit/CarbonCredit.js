import React from 'react';
import PropTypes from 'prop-types';
import './CarbonCredit.scss';

const CarbonCredit = () => {
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
                  <input className="form-control" type="text" aria-label="Amount (to the nearest dirham)" id="widh" placeholder="Number of Carbon Credit..."/><span className="input-group-text"><b>Carbon Credit</b></span>
                  <div id="place"><button className="btn btn-primary" type="button" ><b>Add to cart</b></button></div>
                  
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
