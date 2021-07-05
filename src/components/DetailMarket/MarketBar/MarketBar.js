/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import './MarketBar.scss';
import Table from '../Table/Table';
import Album from '../Album/Album';


const MarketBar = (props) =>{ 
  const [navItems, setnavItems] = useState({"Detail":true,"Photo":false});
  const [activeClass, setactiveClass] = useState({"Detail":"active","Photo":""})
  //console.log(props)
  const toggle = (Event) =>{
    //console.log("market")
    //console.log(Event)
    //console.log(Event.target.id)
      switch (Event.target.id) {
          case "Details":
              setnavItems({"Detail":true,"Photo":false});
              setactiveClass({"Detail":"active","Photo":""});
              break;
          case "Photos":
              setnavItems({"Detail":false,"Photo":true});
              setactiveClass({"Detail":"","Photo":"active"});
              break;   
          default:
            break;
      }
  }
  return(
    <div className="Bar" data-testid="Bar">
    <div className="navigation">
      <ul id="navs">
        <li>
          <a className={"link "+activeClass.Detail} id="Details" onClick={toggle}>Detail</a>
        </li>
        <li>
          <a className={"link "+activeClass.Photo} id="Photos" onClick={toggle}>Photos</a>
        </li>
      </ul>
          </div>
          <div>
              {navItems.Detail ? <div><Table trees={props.trees} idtree={props.idtree}/></div> :null}
              {navItems.Photo ? <Album trees={props.trees}/>:null}
          </div>
          <div className="navigation">
      <ul id="navs">
        <li>
          <a className={"linkactive"} id="related" ><b>Related Products</b></a>
        </li>
        
      </ul>
          </div>
          
  </div>
);
}



export default MarketBar;
