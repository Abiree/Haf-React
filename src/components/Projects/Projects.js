import React from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';
import UpBar from '../Home/UpBar/UpBar';

const Projects = () => (
  <div className="Projects" data-testid="Projects">
    <UpBar/>
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
