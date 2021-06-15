import React,{useState} from 'react';

import './DetailMarket.scss';
import MarketBar from './MarketBar/MarketBar';
import Minilist from './Minilist/Minilist'

const DetailMarket = (props) =>{ 
  //console.log(props);
 
  const data = useState(props.trees[0]);
  //console.log(data[0])
if (data[0]!=null){
  return(
  <div className="DetailMarket" data-testid="DetailMarket">
    <div className="main"> 
      <div className="treeCategorie">
        <div id="pad"><b>{data[0].category}</b> </div>
        <div className= "vertical"></div>
        <div id="pad"><b>Market</b></div>
      </div>
      <div className="treeName"> 
        <h2 id="green"><b>{data[0].title}</b></h2>
      </div>
      
        <div className="project"> 
            <div className="projectImage">
              <img class="img-fluid" src={'../'.concat(data[0].img)} alt="projectimg"/>
            </div>
            <div className="projectDonation">
              <div className="flex">
              <h5>{data[0].title}</h5>
              <p id="price">{data[0].price}</p>
              </div>
              
              <p id="font">{data[0].category}</p>
            
                <div class="priceInput"> 
                <div class="input-group mb-3">
                  <input class="form-control" type="text" aria-label="Amount (to the nearest dirham)" placeholder="Number of trees..."/><span class="input-group-text"><b>Tree</b></span>
                  <button class="btn btn-primary" type="button"><b>Add to cart</b></button>
                </div>
              </div>
            </div>
          </div>
          
          <MarketBar trees={props.trees}/>
          <Minilist treelist={props.treelist}/>
          
    </div>
   
    
    
  </div>
);
}
console.log("koko")
return(
  <div className="DetailMarket" data-testid="DetailMarket">
    <div class="container-lg">
      
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
