import React from 'react';
import PropTypes from 'prop-types';
import './Market.scss';
import Filltrage from './Filltrage/Filltrage';
import MarketList from './MarketList/MarketList';
const Market = () => (
  <div className="Market" data-testid="Market">
     <Filltrage/>
    <h2>Market</h2>
    <MarketList/>
  </div>
);

Market.propTypes = {};

Market.defaultProps = {};

export default Market;
