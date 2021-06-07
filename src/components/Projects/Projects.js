import React from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';
import UpBar from '../Home/UpBar/UpBar';
import Filltrage from './Filltrage/Filltrage';

const Projects = () => (
  <div className="Projects" data-testid="Projects">
    
    <Filltrage/>
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
