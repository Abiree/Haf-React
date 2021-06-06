import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodaysProject.scss';
import {Button, Progress} from 'reactstrap';
const TodaysProject = () => {
  const [project, setProject] = useState({
    "img":"./assets/project.png",
    "title":"A big Title",
    "paragraph":" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tortor purus. Donec in tincidunt du Sed congue ut purus vel molestie. Phasellus eu malesuada lacus. Intel lacinia at lectus sit amet fermentum. Curabitur sit amet laoreet ligula, at aliquet sem.",
    "actualAmount":5000,
    "goalAmount":6000
  });
  return(
    <div className="TodaysProject" data-testid="TodaysProject">
      <h2>Todays Project : </h2>
      <section className="todayProject">
        <div className="projectImage">
          {project.img==null? null:<img class="img-fluid" src={project.img} alt="projectimg"/> }
        </div>
        <div className="textIntro2">
          <div className="projectText">
            <h1>{project.title}</h1>
            <p>{project.paragraph}</p>
            <div className="slider">
              <p className="donator">{project.actualAmount} DH</p>
              <p className="don">{project.goalAmount} DH</p>
            </div>
            <div className="range">
              <Progress value={parseInt((project.actualAmount / project.goalAmount)*100)}/>
            </div>
            <div className = "DonateIntro">
              <Button className="bfont-weight: 20px;tn">Donate Now</Button>
              <a classname="detail" href="#">More Detail &gt;&gt; </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

TodaysProject.propTypes = {};

TodaysProject.defaultProps = {};

export default TodaysProject;
