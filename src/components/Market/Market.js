/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import './Market.scss';
import Filltrage from './Filltrage/Filltrage';
import MarketList from './MarketList/MarketList';
import CarbonCredit from './CarbonCredit/CarbonCredit';

const Market = (props) =>{ 

  const [navItems, setnavItems] = useState({"tree":true,"carbon":false});
  const [activeClass, setactiveClass] = useState({"tree":"active","carbon":""});
  console.log(props.user)
  const BarStyle = {
    "font-weight": "bold"
  };
  const toggle = (Event) =>{
    
   
      switch (Event.target.id) {
          case "trees":
              setnavItems({"tree":true,"carbon":false});
              setactiveClass({"tree":"active","carbon":""});
              break;
          case "carbons":
              setnavItems({"tree":false,"carbon":true});
              setactiveClass({"tree":"","carbon":"active"});
              break;   
          default:
            break;
      }
  }
  return(
  
  <div className="Market" data-testid="Market">
    <div className="navigation">
        <ul id="navs">
          <li>
            <a className={"link "+activeClass.tree} id="trees" onClick={toggle} style={activeClass.tree ? BarStyle:{ }}>Trees Shop</a>
          </li>
          <li>
            <a className={"link "+activeClass.carbon} id="carbons" onClick={toggle} style={activeClass.carbon ? BarStyle:{} }>Carbon Credit</a>
          </li>
        </ul>
            </div>
            <div>
                {navItems.tree ? <div> <Filltrage/><h2>Market</h2><MarketList addToCart={props.addToCart} trees={props.trees} treesLoading={props.treesLoading} treesFailed={props.treesFailed} user={props.user}/></div> :null}
                {navItems.carbon ? <CarbonCredit/>:null}
            </div>
   
  </div>
);
}

export default Market;
