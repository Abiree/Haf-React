/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './DetailProject.scss';
import {Progress,Spinner} from 'reactstrap';



const DetailProject = (props) => {
  //console.log("chouaib"+props);
  //console.log(props)
  const id=useState(props.idproject);
  
  
  const data = useState(props.projectid.projectsList.filter((x) => x._id === id[0]));
  console.log(data[0][0])
  if(props.projectsLoading){
    return (
      <div className="DetailProject main" data-testid="DetailProject">
        <div className="main">
        <div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="#1A75BB" /></div>
        </div>
       
      </div>
    );
  }
if (data[0][0]!=null){
  return(
  <div className="DetailProject" data-testid="DetailProject">
    <div className="container-lg">    
        <div className="main"> 
          <div className="projectCategorie">
            <div id="pad"><b>{data[0][0].category}</b> </div>
            <div className= "vertical"></div>
            <div id="pad"><b>{data[0][0].createdAt.slice(0,10)}</b></div>
          </div>
          <div className="projectName"> 
            <h2 id="green"><b>{data[0][0].title}</b></h2>
          </div>
        <div className="project"> 
          <div className="projectImage"><img className="img-fluid" src={"/api/images/"+data[0][0].image} alt="projectimg"/>
          </div>
          <div className="projectDonation">
            <h5 id="font">{data[0][0].totalDons} DH raised of {data[0][0].goal} DH goal</h5>
            <div className="slider">
            </div>
            <div className="range">
              <Progress value={parseInt((data[0][0].totalDons / data[0][0].goal)*100)}/>
            </div>
              <div className="infos"> 
                <p className="donation"><b>{data[0][0].dons} donations</b></p>
                <p className="price"><b>{parseInt(data[0][0].goal - data[0][0].totalDons)} DH to go</b></p>
              </div>
              <div className="priceInput"> 
              <div className="input-group mb-3">
                <input className="form-control" type="text" aria-label="Amount (to the nearest dirham)" placeholder="Price ..."/><span className="input-group-text"><b>DH</b></span>
                <button className="btn btn-primary" type="button"><b>Donate Now</b></button>
              </div>
            </div>
          </div>
        </div>
        <div id="navigation"> 
          <div className="navbar navbar-expand navbar-light bg-light">
            <div id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active" href="#">Summary </a></li>
                <li className="nav-item"><a className="nav-link" href="#">Lorem </a></li>
                <li className="nav-item"><a className="nav-link" href="#">Lorem </a></li>
                <li className="nav-item"><a className="nav-link" href="#">Lorem </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info"> 
          <div className="projectInfo"> 
            <p>
             {data[0][0].description}
            </p>
          </div>
          <div className="share">
            <div className="projectShare">
              <button className="btn" ><i className="fa fa-facebook-square" id="white">Share this On facebook</i></button>
              <button className="btn" ><i className="fa fa-twitter-square" id="white">Share this On facebook</i></button>
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
      <div className="container-lg">
        
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
