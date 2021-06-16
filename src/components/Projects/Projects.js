import React from 'react';
import './Projects.scss';
import Filltrage from './Filltrage/Filltrage';
import ProjectList from './ProjectsList/ProjectsList';
const Projects = (props) => {
  console.log(props.Projects);
  return(
    <div className="Projects" data-testid="Projects">
      <Filltrage/>
      <h2>Other Projects</h2>
      <ProjectList 
        projects={props.projects}
        projectsLoading={props.projectsLoading}
        projectsFailed={props.projectsFailed}
      />
  </div>
  );
};


export default Projects;
