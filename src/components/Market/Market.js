import React from 'react';
import PropTypes from 'prop-types';
import './Market.scss';
import Filltrage from './Filltrage/Filltrage';
const Market = () => (
  <div className="Market" data-testid="Market">
     <Filltrage/>
    <h2>Market</h2>
  </div>
);

Market.propTypes = {};

Market.defaultProps = {};

export default Market;
