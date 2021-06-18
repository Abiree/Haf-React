import React,{useState} from 'react';

import './DetailMarket.scss';
import {Spinner} from 'reactstrap';
import MarketBar from './MarketBar/MarketBar';
import Minilist from './Minilist/Minilist'

const DetailMarket = (props) =>{ 
 
  const id=useState(props.idtree);
 
  const data = useState(props.trees.filter((x) => x.id === Number(id[0])));
  console.log(props);
  if(props.treesLoading){
    return (
      <div className="DetailMarket" data-testid="DetailMarket">
        <div className="main">
        <div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="#1A75BB" /></div>
        </div>
       
      </div>
    );
  }

if (data[0][0]!=null){
  return(
  <div className="DetailMarket" data-testid="DetailMarket">
    <div className="main"> 
      <div className="treeCategorie">
        <div id="pad"><b>{data[0][0].category}</b> </div>
        <div className= "vertical"></div>
        <div id="pad"><b>Market</b></div>
      </div>
      <div className="treeName"> 
        <h2 id="green"><b>{data[0][0].title}</b></h2>
      </div>
      
        <div className="project"> 
            <div className="projectImage">
              <img className="img-fluid" src={'../'.concat(data[0][0].img)} alt="projectimg"/>
            </div>
            <div className="projectDonation">
              <div className="flex">
              <h5>{data[0][0].title}</h5>
              <p id="price">{data[0][0].price}</p>
              </div>
              
              <p id="font">{data[0][0].category}</p>
            
                <div className="priceInput"> 
                <div className="input-group mb-3">
                  <input className="form-control" type="text" aria-label="Amount (to the nearest dirham)" placeholder="Number of trees..."/><span className="input-group-text"><b>Tree</b></span>
                  <button className="btn btn-primary" type="button"><b>Add to cart</b></button>
                </div>
              </div>
            </div>
          </div>
          
    
          <MarketBar trees={props.trees}  idtree={props.idtree}/>
          <Minilist trees={props.trees}  idtree={props.idtree}/>
    </div>
   
    
    
  </div>
);
}
console.log("koko")
return(
  <div className="DetailMarket" data-testid="DetailMarket">
    <div className="container-lg">
      
  <div className="main"> 
    <div className="treeCategorie">
    <h1>No items</h1>
    </div>
    </div>
    </div>
    </div>
)
}
export default DetailMarket;
