import React,{useState} from 'react';
import './Projects.scss';
import Filltrage from './Filltrage/Filltrage';
import ProjectList from './ProjectsList/ProjectsList';
import Donationpop from './Donationpop/Donationpop';
const Projects = (props) => {
  return(
    <div className="Projects" data-testid="Projects">
      <h2>Other Projects</h2>
      <ProjectList
        projects={props.projects}
        projectsLoading={props.projectsLoading}
        projectsFailed={props.projectsFailed}
        fetchPagination={props.fetchPagination}
        pagination={props.pagination}
        query = {props.query}
        user={props.user}
      />
  </div>

  );
};


export default Projects;
