/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './TodaysProject.scss';
import {Button, Progress,Spinner} from 'reactstrap';
const TodaysProject = (props) => {
  const [project] = useState(props.project);
  if(props.projectsLoading){
    return (
      <div className="TodaysProject" data-testid="TodaysProject">
        <div style={{'width':'100%','display': 'flex', 'justify-content':'center' }}><Spinner color="light" /></div>
      </div>
    );
  }
  return(
    <div className="TodaysProject" data-testid="TodaysProject">
      <h2>Todays Project : </h2>
      <section className="todayProject">
        <div className="projectImage">
          {project.image==null? null:<img className="img-fluid" src={"https://hafbackend.herokuapp.com/api/images/"+project.image} alt="projectimg"/> }
        </div>
        <div className="textIntro2">
          <div className="projectText">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="slider">
              <p className="donator">{project.totalDons} DH</p>
              <p className="don">{project.goal} DH</p>
            </div>
            <div className="range">
              <Progress value={parseInt((project.totalDons / project.goal)*100)}/>
            </div>
            <div className = "DonateIntro">
              <Button className="bfont-weight: 20px;tn">Donate Now</Button>
              <a className="detail" href="#">More Detail &gt;&gt; </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodaysProject;
