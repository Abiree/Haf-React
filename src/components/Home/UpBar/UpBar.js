import React from 'react';
import PropTypes from 'prop-types';
import './UpBar.scss';

const UpBar = () => (
  <header>
      <nav class="navbar navbar-expand-lg navbar-light" id="navigation">
        <div class="brand"><a class="navbar-brand">HAF</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        </div>
        <div class="nav"> 
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item"> <a class="nav-link active" aria-current="page" href="./index.html">Home </a></li>
              <li class="nav-item"> <a class="nav-link" href="project.html">Projects</a></li>
              <li class="nav-item"> <a class="nav-link" href="market.html">Market</a></li>
              <li class="nav-item"> <a class="nav-link" href="contact.html">ContactUs</a></li>
              <li class="nav-item">
                <button class="btn" type="button">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </header>
);

UpBar.propTypes = {};

UpBar.defaultProps = {};

export default UpBar;
