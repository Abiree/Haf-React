import React from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';
import UpBar from '../Home/UpBar/UpBar';
import Filltrage from './Filltrage/Filltrage';
import ProjectList from './ProjectsList/ProjectsList';
const Projects = () => (
  <div className="Projects" data-testid="Projects">
    <Filltrage/>
    <h2>Other Projects</h2>
    <ProjectList/>
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
