import React, { useState } from 'react';

import './DetailProject.scss';
import {Progress} from 'reactstrap';



const DetailProject = (props) => {
  
  const data = useState(props.projectid[0]);
  console.log(data[0])
if (data[0]!=null){
  return(
  <div className="DetailProject" data-testid="DetailProject">
    <div class="container-lg">    
        <div className="main"> 
          <div className="projectCategorie">
            <div id="pad"><b>{data[0].category}</b> </div>
            <div className= "vertical"></div>
            <div id="pad"><b>{data[0].date}</b></div>
          </div>
          <div className="projectName"> 
            <h2 id="green"><b>{data[0].title}</b></h2>
          </div>
        <div className="project"> 
          <div className="projectImage"><img class="img-fluid" src={'../'.concat(data[0].img)} alt="projectimg"/>
          </div>
          <div className="projectDonation">
            <h5 id="font">{data[0].donations} DH raised of {data[0].goal} DH goal</h5>
            <div className="slider">
            </div>
            <div className="range">
              <Progress value={parseInt((data[0].donations / data[0].goal)*100)}/>
            </div>
              <div className="infos"> 
                <p className="donation"><b>{data[0].dons} donations</b></p>
                <p className="price"><b>{parseInt(data[0].goal - data[0].donations)} DH to go</b></p>
              </div>
              <div class="priceInput"> 
              <div class="input-group mb-3">
                <input class="form-control" type="text" aria-label="Amount (to the nearest dirham)" placeholder="Price ..."/><span class="input-group-text"><b>DH</b></span>
                <button class="btn btn-primary" type="button"><b>Donate Now</b></button>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation"> 
          <div className="navbar navbar-expand navbar-light bg-light">
            <div id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link active" href="#">Summary </a></li>
                <li class="nav-item"><a class="nav-link" href="#">Lorem </a></li>
                <li class="nav-item"><a class="nav-link" href="#">Lorem </a></li>
                <li class="nav-item"><a class="nav-link" href="#">Lorem </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info"> 
          <div className="projectInfo"> 
            <p>
             {data[0].paragraph}
            </p>
          </div>
          <div className="share">
            <div className="projectShare">
              <button class="btn" ><i class="fa fa-facebook-square" id="white">Share this On facebook</i></button>
              <button class="btn" ><i class="fa fa-twitter-square" id="white">Share this On facebook</i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
);
  }
  console.log("koko")
  return(
    <div className="DetailProject" data-testid="DetailProject">
      <div class="container-lg">
        
    <div className="main"> 
      <div className="projectCategorie">
      <h1>No items</h1>
      </div>
      </div>
      </div>
      </div>
 )
}



export default DetailProject;
