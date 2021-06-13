import React from 'react';
import './Market.scss';
import Filltrage from './Filltrage/Filltrage';
import MarketList from './MarketList/MarketList';
const Market = (props) => (
  <div className="Market" data-testid="Market">
    <Filltrage/>
    <h2>Market</h2>
    <MarketList trees={props.trees}/>
  </div>
);

export default Market;
