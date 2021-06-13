import React from 'react';
import PropTypes from 'prop-types';
import './DetailProject.scss';
import {Button, Progress} from 'reactstrap';

const DetailProject = () => (
  <div className="DetailProject" data-testid="DetailProject">
    <div class="container-lg"> 
      <div class="main"> 
        <div class="projectCategorie">
          <div id="pad">Youth </div>
          <div className= "vertical"></div>
          <div id="pad">16/10/2020</div>
        </div>
        <div class="projectName"> 
          <h2>Youth empowerment</h2>
        </div>
        <div class="project"> 
          <div class="projectImage"><img class="img-fluid" src=".././assets/project.png" alt="projectimg"/>
          </div>
          <div class="projectDonation">
            <h5 id="font">2 500 000 DH raised of 5 000 000 DH goal</h5>
            <div className="slider">
            </div>
            <div className="range">
              <Progress value="50"/>
            </div>
              <div class="infos"> 
                <p class="donation"><b>5000 donations</b></p>
                <p class="price"><b>2 500 000 DH to go</b></p>
              </div>
            
            <div class="priceInput"> 
              <div class="input-group mb-3">
                <input class="form-control" type="text" aria-label="Amount (to the nearest dirham)" placeholder="Price ..."/><span class="input-group-text"><b>DH</b></span>
                <button class="btn btn-primary" type="button"><b>Donate Now</b></button>
              </div>
            </div>
          </div>
        </div>
        <div class="navigation"> 
          <div class="navbar navbar-expand navbar-light bg-light">
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
        <div class="info"> 
          <div class="projectInfo"> 
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur vel tortor purus. Donec in tincidunt dui.
              Sed congue ut purus vel molestie.
              Phasellus eu malesuada lacus. Integer 
              lacinia at lectus sit amet fermentum. Curabitur sit amet 
              laoreet ligula, at aliquet sem. Nulla facilisi. 
              Nunc ac condimentum enim.
            </p>
          </div>
          <div class="share">
            <div class="projectShare">
              <button class="btn" ><i class="fa fa-facebook-square" id="white">Share this On facebook</i></button>
              <button class="btn" ><i class="fa fa-twitter-square" id="white">Share this On facebook</i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
);

DetailProject.propTypes = {};

DetailProject.defaultProps = {};

export default DetailProject;
