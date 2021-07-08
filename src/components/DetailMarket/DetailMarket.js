import React,{useState} from 'react';

import './DetailMarket.scss';
import {Spinner} from 'reactstrap';
import MarketBar from './MarketBar/MarketBar';
import Minilist from './Minilist/Minilist'

const DetailMarket = (props) =>{ 
  const [input, setInput] = useState('');
  
  const handleSubmit = (values) => {
    console.log(input)
    if(props.user.userDetail == null || input=="" ){
      
     
    }
    else{
      props.addToCart(props.idtree,input,props.user.userDetail._id)
    }
    
  }
 
  const id=useState(props.idtree);
  const data = useState(props.trees.filter((x) => x._id === id[0]));
  //console.log(data);
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
        <div id="pad" ><b>{data[0][0].latinName}</b> </div>
        <div className= "vertical"></div>
        <div id="pad"><b>Market</b></div>
      </div>
      <div className="treeName"> 
        <h2 id="green"><b>{data[0][0].name}</b></h2>
      </div>
      
        <div className="project"> 
            <div className="projectImage">
              <img className="img-fluid" src={"/api/images/"+data[0][0].picture} alt="projectimg" style={{"width":"200px"}}/>
            </div>
            <div className="projectDonation">
              <div className="flex">
              <h5>{data[0][0].name}</h5>
              <p id="price">{data[0][0].price.mad}DH/{data[0][0].price.usd} $</p>
              </div>
            
              <p id="font" style={{"color":"white","margin-left": "20px"}}>{data[0][0].latinName}</p>
            
                <div className="priceInput"> 
                <div className="input-group mb-3">
                  <input className="form-control" type="text" aria-label="Amount (to the nearest dirham)" placeholder="Number of trees..." value={input} onInput={e => setInput(e.target.value)}/><span className="input-group-text"><b>Tree</b></span>
                  <button className="btn btn-primary" type="button" onClick={handleSubmit}><b>Add to cart</b></button>
                </div>
              </div>
            </div>
          </div>
          
    
          <MarketBar trees={props.trees}  idtree={props.idtree}/>
          <Minilist trees={props.trees}  idtree={props.idtree} user={props.profile} addToCart={props.addToCart}/>
    </div>
   
    
    
  </div>
);
}

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